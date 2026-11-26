# Club Social

Plataforma comunitaria para descubrir actividades, participar en clubes temáticos y compartir experiencias.

## Stack inicial

- React + TypeScript
- Vite
- Neon (PostgreSQL) como base de datos prevista para el backend
- Capa API del lado del servidor para acceder a Neon de forma segura

## Desarrollo local

```bash
npm install
npm run dev
```

## Comprobaciones

```bash
npm run typecheck
npm run build
```

## Arquitectura prevista

La aplicación se desarrollará como una experiencia mobile-first, con soporte cuidado para escritorio.

El frontend no debe conectarse directamente a la base de datos ni recibir credenciales de Neon. Las consultas se realizarán desde endpoints del servidor/API. La cadena `DATABASE_URL` será una variable de entorno exclusivamente del servidor.

Recomendación de arquitectura pendiente de confirmación: crear un proyecto/base de datos de Neon independiente para Club Social, separado de Spearhead Companion. Así se mantienen aislados los datos, permisos y ciclos de vida de ambos productos, aunque ambos proyectos utilicen la misma cuenta de Neon.

## Estado

Fundación inicial del frontend y sistema visual. Las secciones secundarias son marcadores de posición y se implementarán progresivamente.
