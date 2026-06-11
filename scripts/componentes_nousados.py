import os
import re

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

def main():
    # Base directory is parent of scripts directory (where this script is located)
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Directorio base detectado: {base_dir}")
    
    # Regex to find imports
    import_regex = re.compile(
        r'(?:import|export)\s+(?:[\w*\s{},]*\s+from\s+)?[\'"]([^\'"]+)[\'"]|'
        r'import\(\s*[\'"]([^\'"]+)[\'"]\s*\)'
    )
    
    # 1. Find all entry files (page.tsx, layout.tsx, not-found.tsx) under src/app
    app_dir = os.path.join(base_dir, 'src', 'app')
    entry_files = []
    target_names = {'page.tsx', 'layout.tsx', 'not-found.tsx'}
    if os.path.exists(app_dir):
        for root, dirs, files in os.walk(app_dir):
            for file in files:
                if file in target_names:
                    entry_files.append(os.path.abspath(os.path.join(root, file)))
    else:
        print(f"Error: No se encontró la carpeta app en {app_dir}")
        return

    print(f"Se encontraron {len(entry_files)} archivos de entrada (page, layout, not-found) en src/app.")
    
    # 2. Get all component files under src/components (excluding src/components/ui)
    components_dir = os.path.join(base_dir, 'src', 'components')
    ui_dir = os.path.join(components_dir, 'ui')
    
    all_components = set()
    if os.path.exists(components_dir):
        for root, dirs, files in os.walk(components_dir):
            # Exclude ui directory and its subdirectories
            norm_root = os.path.abspath(root)
            norm_ui_dir = os.path.abspath(ui_dir)
            if norm_root == norm_ui_dir or norm_root.startswith(norm_ui_dir + os.sep):
                continue
                
            for file in files:
                if file.endswith(('.tsx', '.ts', '.jsx', '.js')) and not file.endswith('.d.ts'):
                    all_components.add(os.path.abspath(os.path.join(root, file)))
    else:
        print(f"Error: No se encontró la carpeta components en {components_dir}")
        return

    print(f"Se encontraron {len(all_components)} componentes totales (excluyendo src/components/ui).")
    
    # 3. Trace imports starting from entry files
    visited = set()
    queue = list(entry_files)
    visited.update(entry_files)
    
    # We want to record components that are actually used (which are in all_components)
    used_components = set()
    
    while queue:
        current_file = queue.pop(0)
        current_dir = os.path.dirname(current_file)
        
        # If the file is one of our custom components, mark it as used
        if current_file in all_components:
            used_components.add(current_file)
            
        imports = extract_imports(current_file, import_regex)
        for imp in imports:
            resolved = resolve_import(current_dir, imp, base_dir)
            if resolved and resolved not in visited:
                # Only traverse within the project's src directory
                src_path = os.path.abspath(os.path.join(base_dir, 'src'))
                if resolved.startswith(src_path):
                    visited.add(resolved)
                    queue.append(resolved)
                    
    # 4. Find unused components
    unused_components = all_components - used_components
    
    # Sort and format relative paths
    unused_relative_paths = sorted([os.path.relpath(p, base_dir) for p in unused_components])
    entry_relative_paths = sorted([os.path.relpath(p, base_dir) for p in entry_files])
    
    # Write output to files
    output_dir = os.path.join(base_dir, 'scripts', 'respuestas')
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, 'componentes_no_usados.txt')
    simple_output_file = os.path.join(output_dir, 'componentes_para_eliminar.txt')
    
    try:
        # 1. Full report
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("=== ANÁLISIS DE COMPONENTES NO USADOS ===\n")
            f.write(f"Directorio Base: {base_dir}\n")
            f.write(f"Archivos de entrada (page, layout, not-found) analizados:\n")
            for entry in entry_relative_paths:
                f.write(f"  - {entry}\n")
            f.write(f"\nTotal componentes encontrados (excluyendo src/components/ui): {len(all_components)}\n")
            f.write(f"Total componentes en uso detectados: {len(used_components)}\n")
            f.write(f"Total componentes no usados: {len(unused_components)}\n\n")
            f.write("=== DETALLE DE COMPONENTES NO USADOS ===\n")
            if unused_relative_paths:
                for path in unused_relative_paths:
                    clean_path = path.replace('\\', '/')
                    f.write(f"{clean_path}\n")
            else:
                f.write("¡Todos los componentes están en uso!\n")
                
        # 2. Simple list for deletion
        with open(simple_output_file, 'w', encoding='utf-8') as f:
            for path in unused_relative_paths:
                clean_path = path.replace('\\', '/')
                f.write(f"{clean_path}\n")
                
        print(f"Reporte detallado generado en: {output_file}")
        print(f"Lista simple de eliminación generada en: {simple_output_file}")
        print(f"Componentes no usados encontrados: {len(unused_relative_paths)}")
    except Exception as e:
        print(f"Error al escribir los reportes: {e}")

if __name__ == '__main__':
    main()
