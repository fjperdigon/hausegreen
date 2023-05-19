import json
from datetime import datetime

def wrap_paragraphs_with_p_tags(text):
    paragraphs = text.split('\n\n')
    wrapped_paragraphs = [f'<p>{paragraph}</p>' for paragraph in paragraphs]
    return ''.join(wrapped_paragraphs)

# Leer el contenido del archivo de entrada
input_file = 'C:/Users/A642180/OneDrive - Atos/Desktop/Blog IA/Creacion de posts/input.txt'
with open(input_file, 'r', encoding='utf-8') as file:
    input_text = file.read()

# Procesar el texto y agregar etiquetas <p>
content = wrap_paragraphs_with_p_tags(input_text)

# Obtener la fecha actual en formato ISO (AAAA-MM-DD)
current_date = datetime.now().date().isoformat()

# Crear el objeto de salida con el formato deseado
output_object = {
    "title": "Publicación XX",
    "imagen": "",
    "content": content,
    "date": current_date,
    "section": "XXXXX"
}

# Guardar el objeto en un archivo de salida en formato JSON
output_file = 'C:/Users/A642180/OneDrive - Atos/Desktop/Blog IA/Creacion de posts/output.json'
with open(output_file, 'w', encoding='utf-8') as file:
    json.dump(output_object, file, ensure_ascii=False, indent=2)

print(f"El objeto procesado se guardó en '{output_file}'.")
