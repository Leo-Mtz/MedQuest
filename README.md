#MedQuest 

MedQuest es una aplicación web de quizzes para ayudar a los usuarios a practicar las preguntas de medicina.

#Requisitos previos

- Node.js (v16.x o superior)
- npm (v8.x o superior)

#Instalación

1.Clonar el repositorio
2. Ejecutar el siguiente comando para acceder al directorio del proyecto en la terminal:
cd Medquest 
3. Ejecutar el siguiente comando para instalar las dependencias:
npm install


#Ejecución de proyecto

Al estar hecho con Astro se ha integrado el frontend como la API en un solo servidor de desarrollo, por ende, facilitando la ejecución del proyecto.

1. Ejecutar el siguiente comando para iniciar el servidor de desarrollo:
npm run dev
2.Abrir el navegador y acceder a la dirección que muestra en la terminal:
http://localhost:----

Esto inciará el servidor de desarrollo y abrirá la aplicación en el navegador.

Frontend principal: http://localhost:4321/
Dashboard de quizzes: http://localhost:4321/quizDashboard
API de quizzes: http://localhost:4321/api/quiz
API de quiz específico: http://localhost:4321/api/quizzes/1 (donde '1' es el ID del quiz)

#Estructura del proyecto:

MedQuest/
├── src/
│   ├── components/     # Componentes React
│   ├── layouts/        # Layouts de Astro
│   ├── pages/          # Rutas y páginas de la aplicación
│   │   └── api/        # Endpoints de la API
│   ├── services/       # Servicios para gestión de datos
│   ├── styles/         # Estilos CSS
│   └── utils/          # Utilidades
├── public/             # Archivos estáticos
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias y scripts
└── tsconfig.json       # Configuración de TypeScript