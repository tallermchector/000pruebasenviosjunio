import os
import sys

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Directorio base detectado: {base_dir}")
    
    input_file = os.path.join(base_dir, 'scripts', 'respuestas', 'componentes_para_eliminar.txt')
    if not os.path.isfile(input_file):
        print(f"Error: No se encontró el archivo de entrada en {input_file}")
        sys.exit(1)
        
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f if line.strip()]
        
    if not lines:
        print("No hay archivos listados para eliminar.")
        return
        
    print(f"Se encontraron {len(lines)} archivos para eliminar en la lista.")
    
    # Safety checks
    components_dir = os.path.abspath(os.path.join(base_dir, 'src', 'components'))
    
    deleted_count = 0
    skipped_count = 0
    error_count = 0
    
    for relative_path in lines:
        # Avoid potential path traversal attacks / mistakes
        abs_path = os.path.abspath(os.path.join(base_dir, relative_path))
        
        # Verify it is inside the components directory
        if not abs_path.startswith(components_dir):
            print(f"[ERROR DE SEGURIDAD] Saltando {relative_path} porque no está dentro de {components_dir}")
            skipped_count += 1
            continue
            
        if not os.path.isfile(abs_path):
            print(f"[ADVERTENCIA] El archivo no existe o ya fue eliminado: {relative_path}")
            skipped_count += 1
            continue
            
        try:
            os.remove(abs_path)
            print(f"[ELIMINADO] {relative_path}")
            deleted_count += 1
        except Exception as e:
            print(f"[ERROR] No se pudo eliminar {relative_path}: {e}")
            error_count += 1
            
    # Clean up empty subdirectories recursively under src/components
    empty_dirs_removed = 0
    # Walk bottom-up to remove child directories before parent directories
    for root, dirs, files in os.walk(components_dir, topdown=False):
        # Do not delete src/components itself
        if os.path.abspath(root) == components_dir:
            continue
            
        # Check if the directory is empty
        if not os.listdir(root):
            try:
                os.rmdir(root)
                rel_dir = os.path.relpath(root, base_dir).replace('\\', '/')
                print(f"[DIRECTORIO ELIMINADO POR ESTAR VACÍO] {rel_dir}")
                empty_dirs_removed += 1
            except Exception as e:
                pass

    print("\n=== RESUMEN DE EJECUCIÓN ===")
    print(f"Archivos eliminados exitosamente: {deleted_count}")
    print(f"Archivos no encontrados/saltados: {skipped_count}")
    print(f"Errores al eliminar: {error_count}")
    print(f"Directorios vacíos limpiados: {empty_dirs_removed}")

if __name__ == '__main__':
    # check for force flag in arguments
    force = False
    if len(sys.argv) > 1 and sys.argv[1] in ('--yes', '-y'):
        force = True
        
    if force:
        main()
    else:
        print("¡ATENCIÓN! Este script eliminará físicamente los archivos listados en 'componentes_para_eliminar.txt'.")
        print("Por favor, asegúrate de tener una copia de seguridad o estar usando Git.")
        confirm = input("¿Deseas continuar con la eliminación de los archivos? (s/n): ").strip().lower()
        if confirm in ('s', 'si', 'y', 'yes'):
            main()
        else:
            print("Operación cancelada por el usuario.")
