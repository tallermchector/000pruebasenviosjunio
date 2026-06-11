import os
import re
import json

def extract_imports(file_path, import_regex):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []
    
    # Strip multi-line comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Strip single-line comments
    content = re.sub(r'//.*$', '', content, flags=re.MULTILINE)
    
    imports = []
    for match in import_regex.finditer(content):
        val = match.group(1) or match.group(2)
        if val:
            imports.append(val)
    return imports

def resolve_import(current_file_dir, import_path, base_dir):
    if import_path.startswith('@/'):
        target_path = os.path.join(base_dir, 'src', import_path[2:])
    elif import_path.startswith('src/'):
        target_path = os.path.join(base_dir, import_path)
    elif import_path.startswith('.') or import_path.startswith('..'):
        target_path = os.path.normpath(os.path.join(current_file_dir, import_path))
    else:
        return None
    
    target_path = os.path.abspath(target_path)
    
    # Try exact match or file extensions
    extensions = ['', '.tsx', '.ts', '.jsx', '.js']
    for ext in extensions:
        candidate = target_path + ext
        if os.path.isfile(candidate):
            return candidate
            
    # Try index files if directory
    if os.path.isdir(target_path):
        for ext in ['.tsx', '.ts', '.jsx', '.js']:
            candidate = os.path.join(target_path, f'index{ext}')
            if os.path.isfile(candidate):
                return os.path.abspath(candidate)
                
    return None

def analyze_page_components(page_file, base_dir, import_regex):
    visited = set()
    queue = [page_file]
    visited.add(page_file)
    
    components = set()
    ui_components = set()
    other_src_files = set()
    
    components_dir = os.path.abspath(os.path.join(base_dir, 'src', 'components'))
    ui_dir = os.path.abspath(os.path.join(components_dir, 'ui'))
    
    while queue:
        current_file = queue.pop(0)
        current_dir = os.path.dirname(current_file)
        
        # Determine file type / category
        if current_file != page_file:
            norm_path = os.path.abspath(current_file)
            if norm_path.startswith(ui_dir):
                ui_components.add(norm_path)
            elif norm_path.startswith(components_dir):
                components.add(norm_path)
            else:
                other_src_files.add(norm_path)
        
        imports = extract_imports(current_file, import_regex)
        for imp in imports:
            resolved = resolve_import(current_dir, imp, base_dir)
            if resolved and resolved not in visited:
                # Only traverse within the project's src directory
                src_path = os.path.abspath(os.path.join(base_dir, 'src'))
                if resolved.startswith(src_path):
                    visited.add(resolved)
                    queue.append(resolved)
                    
    return {
        'components': sorted([os.path.relpath(p, base_dir).replace('\\', '/') for p in components]),
        'ui_components': sorted([os.path.relpath(p, base_dir).replace('\\', '/') for p in ui_components]),
        'other_src_files': sorted([os.path.relpath(p, base_dir).replace('\\', '/') for p in other_src_files])
    }

def main():
    # Base directory is the parent directory of scripts/
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Directorio Base Detectado: {base_dir}")
    
    # Regex to find imports
    import_regex = re.compile(
        r'(?:import|export)\s+(?:[\w*\s{},]*\s+from\s+)?[\'"]([^\'"]+)[\'"]|'
        r'import\(\s*[\'"]([^\'"]+)[\'"]\s*\)'
    )
    
    app_dir = os.path.join(base_dir, 'src', 'app')
    if not os.path.exists(app_dir):
        print(f"Error: No se encontró la carpeta app en {app_dir}")
        return
        
    pages = []
    for root, dirs, files in os.walk(app_dir):
        for file in files:
            if file in ('page.tsx', 'page.ts'):
                pages.append(os.path.abspath(os.path.join(root, file)))
                
    print(f"Se encontraron {len(pages)} páginas para analizar.")
    
    output_dir = os.path.join(base_dir, 'scripts', 'respuestas', 'por_paginas')
    os.makedirs(output_dir, exist_ok=True)
    
    summary_data = {}
    
    for page in pages:
        page_rel = os.path.relpath(page, base_dir).replace('\\', '/')
        print(f"Analizando {page_rel}...")
        
        analysis = analyze_page_components(page, base_dir, import_regex)
        
        # Save to summary data
        summary_data[page_rel] = {
            'components': analysis['components'],
            'ui_components': analysis['ui_components'],
            'other_src_files': analysis['other_src_files']
        }
        
        # Create mirror file inside output_dir representing the route structure
        page_subpath = os.path.relpath(page, app_dir)
        page_name_base = os.path.splitext(page_subpath)[0] # e.g. servicios/envios-express/page
        
        individual_out_path = os.path.join(output_dir, f"{page_name_base}.txt")
        individual_out_dir = os.path.dirname(individual_out_path)
        os.makedirs(individual_out_dir, exist_ok=True)
        
        try:
            with open(individual_out_path, 'w', encoding='utf-8') as f:
                f.write(f"=== COMPONENTES Y RUTA PARA LA PÁGINA: {page_rel} ===\n\n")
                
                f.write("--- COMPONENTES CUSTOM (src/components/) ---\n")
                if analysis['components']:
                    for comp in analysis['components']:
                        f.write(f"- {comp}\n")
                else:
                    f.write("(Ninguno)\n")
                f.write("\n")
                
                f.write("--- COMPONENTES UI (src/components/ui/) ---\n")
                if analysis['ui_components']:
                    for comp in analysis['ui_components']:
                        f.write(f"- {comp}\n")
                else:
                    f.write("(Ninguno)\n")
                f.write("\n")
                
                f.write("--- OTROS ARCHIVOS LOCALES IMPORTADOS (src/...) ---\n")
                if analysis['other_src_files']:
                    for other in analysis['other_src_files']:
                        f.write(f"- {other}\n")
                else:
                    f.write("(Ninguno)\n")
                    
            print(f"Reporte individual generado en: {individual_out_path}")
        except Exception as e:
            print(f"Error escribiendo reporte para {page_rel}: {e}")
            
    # Write global summary JSON
    summary_json_path = os.path.join(output_dir, "resumen_general.json")
    try:
        with open(summary_json_path, 'w', encoding='utf-8') as f:
            json.dump(summary_data, f, indent=2, ensure_ascii=False)
        print(f"Resumen global JSON generado en: {summary_json_path}")
    except Exception as e:
        print(f"Error escribiendo JSON de resumen: {e}")

    # Write global summary TXT
    summary_txt_path = os.path.join(output_dir, "resumen_general.txt")
    try:
        with open(summary_txt_path, 'w', encoding='utf-8') as f:
            f.write("=== RESUMEN GENERAL DE COMPONENTES POR PÁGINA ===\n\n")
            for page_rel, analysis in sorted(summary_data.items()):
                f.write(f"PÁGINA: {page_rel}\n")
                f.write(f"  - Componentes Custom: {len(analysis['components'])}\n")
                f.write(f"  - Componentes UI: {len(analysis['ui_components'])}\n")
                f.write(f"  - Otros archivos locales: {len(analysis['other_src_files'])}\n")
                f.write("\n")
        print(f"Resumen general en texto generado en: {summary_txt_path}")
    except Exception as e:
        print(f"Error escribiendo texto de resumen: {e}")

if __name__ == '__main__':
    main()
