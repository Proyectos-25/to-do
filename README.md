# To-Do App

📝 Simple pero elegante aplicación de lista de tareas para mantenerse organizado.

## Tecnologías Utilizadas

- **⚛️ React**: La biblioteca principal para construir la interfaz de usuario.
- **🔑 UUID**: Para generar identificadores únicos para cada tarea.
- **🖼️ React Icons**: Para los íconos de edición y eliminación.

## Paleta de Colores

Para darle un toque moderno y elegante a la aplicación, utilicé una paleta de colores en grises y celestes:

- **🎨 Fondo Principal**: #1A1A1D
- **🎨 Fondo de Componentes**: #2C2C34
- **🎨 Color Principal**: #00A8E8
- **🎨 Color Secundario**: #00CFFD
- **🎨 Texto Principal**: #E0E0E0
- **🎨 Texto Secundario**: #B0B0C0

## Funcionalidades Clave

### ➕ Añadir,
### ✏️ Editar
### 🗑️ y Eliminar Tareas!

## Componentes Clave

### `ToDoWrapper`

Este es el componente principal que envuelve toda la aplicación de to-do. Aquí es donde se maneja el estado de las tareas y se definen las funciones para añadir, editar, completar y eliminar tareas.

### `AddToDoForm`

Este componente es el formulario para añadir nuevas tareas. Utiliza un estado local para manejar el valor del input y llama a la función `addTodo` pasada como prop cuando se envía el formulario.

### `Todo`

Este componente representa cada tarea individual. Muestra la tarea y los íconos para editar y eliminar. También maneja el estado de edición y llama a las funciones correspondientes cuando se interactúa con los íconos.
