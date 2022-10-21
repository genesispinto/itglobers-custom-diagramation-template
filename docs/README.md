<h1 align="center"> Diagramacion Especial </h1>

Grilla interactiva que cambiara un orden y recibira componentes hijos

![grid-custom](https://user-images.githubusercontent.com/95322919/197269463-ef50eb8b-e9b2-4f3d-adcc-6af75134dcc0.png)


____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex

- :pushpin: `Paso 2 - Clone estos archivos` con el link proporcionado en el repositorio 
- :pushpin: `Paso 3 - Instalacion de nodos de react`: 
  Ingresar a la carpeta de react ejecutando el comando en consola ```$ cd react```
  y dentro de esta instalar lo siguiente: <br>
  :pencil2:`1` Nodos de react ejecutando en consola el comando ```$ yarn``` <br>
  :pencil2:`2` Paquete `css-handles` para los estilos basicos ```$ @vtex/css-handles```
- :pushpin: `Paso 4 - Volver a carpeta principal del proyecto y linkear app a su Tienda`: 
  Ejecute comando en consola ```$ vtex link```
- :pushpin: `Paso 5` Ingrese a `Site Editor` desde admin de su tienda y cambie interactivamente las posiciones de las imagenes
  ________
## :key:Dependencias
1. Store-theme: Coloque esta dependencia en el archivo `manifest.json` de su tienda

```ruby
  "dependencies": 
  {
     "itglobers.special-diagramation": "0.x"
  }
```
## :key:Manera de llamar al componente: 
Ejemplo:
```
"flex-layout.row#example":{
    "children":["special-diagramation"]
    }
```

## :black_nib:Autor

 [<sub>Génesis Pinto</sub>](https://github.com/genesispinto) 
