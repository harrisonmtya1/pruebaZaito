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
