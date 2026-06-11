#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Project Parser - Extracts Tailwind, shadcn, and CSS configurations from the local project
"""

import os
import json
import re
from pathlib import Path

def find_project_root():
    """Find the root directory containing tailwind.config.ts"""
    cwd = Path.cwd()
    if (cwd / "tailwind.config.ts").exists():
        return cwd
    
    script_dir = Path(__file__).parent
    for parent in [script_dir] + list(script_dir.parents):
        if (parent / "tailwind.config.ts").exists():
            return parent
    return cwd

def parse_components_json(project_root):
    """Parse components.json file"""
    path = project_root / "components.json"
    if not path.exists():
        return {}
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}

def parse_globals_css(project_root):
    """Parse CSS variables and typography utilities from globals.css"""
    paths = [
        project_root / "src/app/globals.css",
        project_root / "app/globals.css",
        project_root / "src/globals.css",
        project_root / "globals.css"
    ]
    
    comp_json = parse_components_json(project_root)
    if comp_json.get("tailwind", {}).get("css"):
        paths.insert(0, project_root / comp_json["tailwind"]["css"])
        
    css_path = None
    for p in paths:
        if p.exists():
            css_path = p
            break
            
    if not css_path:
        return {}
        
    try:
        with open(css_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception:
        return {}
        
    # Extract HSL variables for :root (light mode) and .dark (dark mode)
    root_match = re.search(r':root\s*\{(.*?)\}', content, re.DOTALL)
    dark_match = re.search(r'\.dark\s*\{(.*?)\}', content, re.DOTALL)
    
    def extract_vars(block):
        if not block:
            return {}
        vars_dict = {}
        matches = re.findall(r'(--[\w\-]+)\s*:\s*([^;]+);', block)
        for var, val in matches:
            vars_dict[var.strip()] = val.strip()
        return vars_dict
        
    light_vars = extract_vars(root_match.group(1) if root_match else "")
    dark_vars = extract_vars(dark_match.group(1) if dark_match else "")
    
    # Extract utilities layer for font classes
    utilities_match = re.search(r'@layer utilities\s*\{(.*?)\}\s*$', content, re.DOTALL)
    if not utilities_match:
        utilities_match = re.search(r'@layer utilities\s*\{(.*)', content, re.DOTALL)
        
    typo_classes = {}
    if utilities_match:
        # Match class blocks like .text-display-lg { ... }
        class_matches = re.findall(r'\.([\w\-]+)\s*\{([^}]+)\}', utilities_match.group(1))
        for class_name, block in class_matches:
            class_name = class_name.strip()
            rules = {}
            for line in block.split(';'):
                if ':' in line:
                    k, v = line.split(':', 1)
                    rules[k.strip()] = v.strip()
            if rules:
                typo_classes[class_name] = rules
                
    return {
        "light": light_vars,
        "dark": dark_vars,
        "typography": typo_classes,
        "file_path": str(css_path)
    }

def parse_tailwind_config(project_root):
    """Parse tailwind.config.ts spacing, borderRadius, fontFamily and animations"""
    path = project_root / "tailwind.config.ts"
    if not path.exists():
        path = project_root / "tailwind.config.js"
    if not path.exists():
        return {}
        
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception:
        return {}
        
    # Extract spacing
    spacing_match = re.search(r'spacing\s*:\s*\{(.*?)\}', content, re.DOTALL)
    spacing = {}
    if spacing_match:
        matches = re.findall(r'["\']?([\w\-]+)["\']?\s*:\s*["\']?([^"\',]+)["\']?', spacing_match.group(1))
        for k, v in matches:
            spacing[k.strip()] = v.strip()
            
    # Extract borderRadius
    radius_match = re.search(r'borderRadius\s*:\s*\{(.*?)\}', content, re.DOTALL)
    radius = {}
    if radius_match:
        matches = re.findall(r'["\']?([\w\-]+)["\']?\s*:\s*["\']?([^"\',]+)["\']?', radius_match.group(1))
        for k, v in matches:
            radius[k.strip()] = v.strip()
            
    # Extract fontFamily
    font_match = re.search(r'fontFamily\s*:\s*\{(.*?)\}', content, re.DOTALL)
    fonts = {}
    if font_match:
        matches = re.findall(r'["\']?([\w\-]+)["\']?\s*:\s*\[\s*(.*?)\s*\]', font_match.group(1), re.DOTALL)
        for k, array_content in matches:
            font_list = [f.strip().strip('"').strip("'") for f in array_content.split(',')]
            fonts[k.strip()] = font_list
            
    # Extract keyframes
    keyframes_match = re.search(r'keyframes\s*:\s*\{(.*?)\}\s*,\s*animation', content, re.DOTALL)
    if not keyframes_match:
        keyframes_match = re.search(r'keyframes\s*:\s*\{(.*?)\}', content, re.DOTALL)
    keyframes = {}
    if keyframes_match:
        matches = re.findall(r'["\']?([\w\-]+)["\']?\s*:\s*\{', keyframes_match.group(1))
        keyframes = [m.strip() for m in matches]
        
    # Extract animation
    animation_match = re.search(r'animation\s*:\s*\{(.*?)\}', content, re.DOTALL)
    animations = {}
    if animation_match:
        matches = re.findall(r'["\']?([\w\-]+)["\']?\s*:\s*["\']?([^"\',]+)["\']?', animation_match.group(1))
        for k, v in matches:
            animations[k.strip()] = v.strip()
            
    return {
        "spacing": spacing,
        "borderRadius": radius,
        "fontFamily": fonts,
        "keyframes": keyframes,
        "animation": animations
    }

def get_project_design_system():
    """Main function to retrieve the current project configuration"""
    root = find_project_root()
    comp = parse_components_json(root)
    css = parse_globals_css(root)
    tw = parse_tailwind_config(root)
    
    return {
        "project_root": str(root),
        "components": comp,
        "css": css,
        "tailwind": tw
    }

if __name__ == "__main__":
    import pprint
    pprint.pprint(get_project_design_system())
