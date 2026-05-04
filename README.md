# Chat en Tiempo Real con HTTP, Socket.IO y Express

Aplicación de chat en tiempo real construida con Express, Socket.IO y React que utiliza MongoDB para persistencia de datos.

## 🚀 Características

- **Chat en tiempo real** mediante Socket.IO
- **Interfaz moderna** con React y Tailwind CSS
- **Persistencia de datos** en MongoDB
- **Navegación SPA** con múltiples páginas
- **Servidor HTTP nativo** integrado con Express

## 🛠️ Tecnologías

- **Backend**: Express.js, Socket.IO, Node.js
- **Frontend**: React, Vite, Tailwind CSS
- **Base de datos**: MongoDB
- **HTTP**: Servidor HTTP nativo de Node.js

## 📁 Estructura del Proyecto

```
├── index.js                 # Servidor principal
├── demo-server-http.js      # Servidor HTTP de demostración
├── package.json             # Dependencias del proyecto
├── vite.config.js          # Configuración de Vite
├── index.html              # HTML principal
├── src/
│   ├── main.jsx            # Punto de entrada React
│   ├── App.jsx             # Componente principal
│   ├── index.css           # Estilos globales
│   ├── pages/
│   │   ├── Home.jsx        # Página de inicio
│   │   ├── Chat.jsx        # Página del chat
│   │   ├── Productos.jsx   # Página de productos
│   │   ├── Contacto.jsx    # Página de contacto
│   │   └── NotFound.jsx    # Página 404
│   └── components/
│       └── Navbar.jsx      # Barra de navegación
├── scripts/                # Scripts del proyecto
└── tailwindcss/           # Configuración de Tailwind
```

## ⚙️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/MaximilianoFallini/hppt-io-express-test.git
cd entrega\ backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Asegurar que MongoDB esté corriendo**
```bash
# En Windows
mongod

# O en Linux/Mac
brew services start mongodb-community
```

## 🏃 Ejecutar el proyecto

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📝 Funcionalidades Principales

### Chat en Tiempo Real
- Los usuarios pueden conectarse al chat
- Los mensajes se emiten en tiempo real a todos los clientes conectados
- Cada mensaje almacena: nombre, texto, hora y ID del autor
- Los mensajes se persisten en MongoDB

### Páginas
- **Home**: Página principal de bienvenida
- **Chat**: Chat en tiempo real
- **Productos**: Catálogo de productos
- **Contacto**: Página de contacto
- **404**: Página de error

## 🔌 Socket.IO Events

### Cliente → Servidor
- `mensaje_chat`: Envía un nuevo mensaje al chat

### Servidor → Cliente
- `mensaje_chat`: Recibe mensajes en tiempo real

## 💾 Base de Datos

### Esquema de Mensaje
```javascript
{
  autorId: String,
  nombre: String,
  texto: String,
  hora: String,
  fecha: Date
}
```

## 🐛 Troubleshooting

**Error de conexión a MongoDB**: Verifica que MongoDB esté corriendo en `localhost:27017`

**Puerto 3000 en uso**: Cambia el puerto en `index.js` modificando la línea:
```javascript
servidor_http.listen(3000, () => { ... });
```

## 📄 Licencia

Este proyecto está bajo licencia libre.

## 👨‍💻 Autor

Maximilian Fallini
