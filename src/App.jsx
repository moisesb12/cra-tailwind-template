import React from "react";

const App = () => {
  return (
    // *** Inicio código de prueba ***
    <div>
      <h1>Texto de prueba dentro de un (h1) sin estilos</h1>
      <h2 className="bg-blue-500">Texto de prueba dentro de un (h2) usando una clase Tailwind en linea</h2>
      <p className="textNew">Texto de prueba dentro de un (p) usando la clase personalizada "textNew" (con @apply) definida en /src/styles/tailwind.css</p>
      <br />
      <p claseName=""><strong>NOTA:</strong> Prueba a cambiar los estilos, ya sea aquí en App.jsx o en la clase .textNew en /src/styles/tailwind.css para apreciar los cambios en el navegador.</p>
    </div>
    // *** Final código de prueba ***
  );
};

export default App;
