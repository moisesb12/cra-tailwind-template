## CRA-Tailwind-Template
### Template para proyectos en React y TailwindCSS
Este template esta preparado parcialmente para comenzar a desarrollar un proyecto en React.JS unasdo TailwindCSS para darle estilos personalizados.

El Template esta optimizado en parte para ver los cambios en vivo al usar las clases de TailwindCSS en desarrollo y para generar un archivo mas liviano de estilos css para producción.

A modo de prueba se colocó un código de muestra en App.jsx el cual se puede modificar para comprobar los cambios en el navegador en tiempo real al modificar los estilos de TailwindCSS, como también poder apreciar la reducción del tamaño del archivo css resultante del proceso de producción con "npm run build".

Tamaño del archivo de TailwindCSS en desarrollo (src/styles/main.css): 2.0 megas aprox.

Tamaño del archivo css resultante luego de la compilación en (/build/static/): 30 kb aprox.

### Observaciones:
En TailwindCSS, la utilidad "@apply" por ahora no es compatible con el plugins "Prettier" por lo que se instaló el plugins "stylelint" e "Tailwind CSS IntelliSense" para evitar ver los mensajes de warning. Si estas en VSC, a parte del archivo de configuración "stylelint.config.js" y los plugins propiamente dichos, hay que agragar la siguiente configuracion al archivo "settings.json" de VSC:

"css.validate": false,

"less.validate": false,

"scss.validate": false,

