# SisApp Frontend Challenge

## Pasos para correr la aplicación

1. **Instalar dependencias**

   ```sh
   npm install
   ```

2. **Ejecutar la aplicación en modo desarrollo**

   ```sh
   npm run dev
   ```

3. **Construir la aplicación para producción**

   ```sh
   npm run build
   ```

4. **Previsualizar la aplicación en producción**
   ```sh
   npm run preview
   ```

## Explicación breve de la solución

Esta aplicación es una solución frontend basada en **React 19**, utilizando **Vite** como herramienta de construcción para optimizar el rendimiento. Se ha integrado **Styled Components** para la gestión de estilos y **React Router** para la navegación entre vistas.

El objetivo principal de la app es proporcionar una experiencia de usuario rápida y fluida, con un código modular y mantenible. La arquitectura sigue buenas prácticas con separación de responsabilidades y componentes reutilizables.

## Mejoras futuras sugeridas

- **Optimización del rendimiento**: Uso de técnicas como lazy loading y memoización para mejorar la carga inicial y la renderización.
- **Tests unitarios y de integración**: Agregar herramientas como Jest y React Testing Library para asegurar la calidad del código.
- **Internacionalización (i18n)**: Soporte para múltiples idiomas mediante react-intl o similares.
- **Modo oscuro**: Implementar una opción para cambiar entre temas claro y oscuro.
- **Mejor manejo de estado**: Evaluar la necesidad de una solución como Redux, Zustand o React Context para manejar el estado global de manera más eficiente.
