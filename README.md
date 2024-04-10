# Prueba Tecnica Leadbox

El siguiente proyecto fue realizado con el siguiente stack: Vue.Js y TailwindCss, El Framework de vue se tomo porque a pesar de una landing page, si se desea proseguir con el proyecto nos permite escalarlo de manera sencilla y tailwindCss por forma eficaz y eficiente de trabajar con estilos y personalizar variables como temas y colores que se utilizaran en el proyecto.

Durante este se trabajo tanto con composition Api como con options Api, si bien lo ideal es trabajar con una en especifico, se decidio hacerlo de esta manera para mostrar lo versatil que es vue.js

La biblioteca utilizada fue swiper.js para el carrusel del seccion "Featured Vehicles".


## Requisitos

Yarn

## Como Ejecutar de Manera Local
Ejecutar los comandos
`Yarn` Descargar Dependencias
`Yarn Dev` Levantar Servidor local por defecto Puerto 4000

##  Estructura de Archivos 

Dentro de src/components Se encontraran los distintos componentes llamados por la seccion a la landing page que pertenecen 

Existen componentes secundarios que se encuentran en las carpetas /sliders y /carousel que son importados a los componentes principales para evitar tener compenentes con mucha logica

src/assets y public/assets se van a econtrar los svg e imagenes utilizados en el proyecto cada una con una carpeta adentro que indica su uso o en que seccion se encuentra



## Añadir clases tailwind
se debe actualizar el output.css para ello correr el comando que va a estar observando los cambios 
`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

## Aspectos a Considerar

Como es una landing page no vi la necesidad de utilizar el ecosistema de vue como vue-router, pinia, vuex. Sin embargo son bastante importante si quieres escalar el proyecto hacia una SPA. donde nos permite organizar mejor nuestra logica.

El proyecto gran parte del contenido no es estatico, se usan expresiones para mostrarlo en html esto permite que un futuro hacer cambios por datos dinamicos sea mas sencillo




