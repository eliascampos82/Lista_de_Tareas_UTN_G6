import React from 'react';

// este componente define el contenido y el estilo del pie de página de la aplicación React,
// incluyendo información de copyright, detalles del grupo y la institución,
// y una lista de integrantes del equipo.


const Footer = () => {
  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '65vh' }}>
      <footer style={{ backgroundColor: "black", padding: '8px', color:"white" , textAlign: 'center', marginTop: 'auto' }}>
        © 2023 LISTA DE TAREAS
        <p style={{marginBottom:"5px",  color:"white" }}>Grupo 6 - React - Argentina Programa - UTN</p>
        <p style={{textAlign:"center", color:"white", fontStyle:"italic", fontWeight:"bold",marginBottom:"5px"}}>Integrantes</p>
        <p>Marcelo Ravera - Francisco Elias Campos - Gaston Di Campli</p>
      </footer>
    </div>
  );
}

export default Footer;

