# React App con TypeScript

## Requisitos previos
- Node.js (versión recomendada: 18+)
- npm

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/dsRodriguez24/react-app-orderapp
   cd react-app-orderapp
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración
- La aplicación usa un backend en Node.js que corre en `http://localhost:8080`.
- Para cambiar el puerto del backend, edita la variable `BASEPATH` en `src/api/api.send.request.ts`.
- Si es necesario, crea un archivo `.env` y define variables adicionales.

## Ejecución en desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

## Tecnologías usadas
- **Vite** (como bundler)
- **React + TypeScript**
- **Redux Toolkit** (gestión de estado)
- **React Router DOM** (ruteo)
- **Axios** (peticiones HTTP)
- **Tailwind CSS** (estilos)
- **Heroicons** (iconos)
- **SweetAlert** (alertas)

