<<<<<<< HEAD
# Zaito

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0-rc.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
# pruebaZaito

Se crea interfaz de usuario con el framework angular de acuerdo con la muestra entregada

Se creo el modulo clientes, dentro de este se crea los siguientes componentes que representan cada opcion del menu:
- almacen
- accesorios-exterior
- accesorios-interior
- mantenimiento

Se crea componentes principales como el menu y la barra de busqueda, indepentientes el modulo clientes

Se crea un servicio servicio-clientes donde se utiliza el servcio HttpClient del modulo HttpClientModule para hacer consultas http
El servicio servicio-clientes se inyecta y se utiliza en el componente de la barra de busqueda y componente almacen para cargar inialmente todos los productos y filtralos

Se utliza la libreria json-server. Esta libreria se debe instalar y ejecutar para que el proyecto pueda cargar la informacion
ejectura json-server --watch db.json

Se aplica lazy load para el enrutamiento 
>>>>>>> 019a7ca7322a92db956511d8e198eefd8248063a
