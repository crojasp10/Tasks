# Prueba Lumon

Para este proyecto se usó [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Despliegue del servidor
Para desplegar el servidor se necesitó instalar [json-server](https://www.npmjs.com/package/json-server) Se requiere un archivo [JSON](https://github.com/crojasp10/Tasks/blob/master/Json/db.json) para montar los servicios.
### Pasos de instalación
1. `npm install -g json-server`
2. `json-server --watch db.json`


## Despliegue del sitio web
1. `ng serve --open`
2. Navegar a `http://localhost:4200/`. La aplicación se recarga automáticamente si se realiza un cambio en los archivos.

### Correr pruebas unitarias

Correr `ng test` para ejecutar las pruebas unitarias.

### Correr pruebas end-to-end

Correr `ng e2e` para ejecutar las pruebas end-to-end.

### Tareas pendientes
1. Llamado de servicios desde la página web
2. Ajustar estilos.

