<template>
 
  
  
  <body>
    <router-link to="/Cotizacion">
    <button id="return-to-top">← Regresar</button>
  </router-link>
    <main>
      <div class="profile-info">
        <section class="perfil">
        <h1>Perfil</h1>
        <img src="../assets/img/LogoPerfil.png" alt="Foto de perfil">
        </section>
      </div>
      <div class="edit-form">
        <section class="informacion">
          <h2>Informacion actual del perfil</h2>
          <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value="Juan">
  
            <label for="apellidos">Apellido paterno:</label>
            <input type="text" id="apellido_paterno" name="apellido_paterno" value="Perez ">
            <label for="apellidos">Apellido materno:</label>
            <input type="text" id="apellido_materno" name="apellido_materno" value="Garcia ">
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" value="Calle 123, Ciudad">
  
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" value="555-555-5555">
  
            <label for="telefono">Correo:</label>
            <input type="text" id="correo" name="correo" value="ejemplo@hotmail.com">
  
  
  
            <div class="buttons">
              <button type="submit">Guardar</button>
              
            </div>
          </form>
        </section>
      </div>
    </main>
  
  </body>
  
  </template>
  
  
  <script>
  import Header from "@/layouts/header.vue";
  export default {
  Header,
  
  }
  </script>
  
  <style scoped>
  #return-to-top {
  
  bottom: 20px;
  right: 30px;
  font-size: 15px;
  border: none;
  outline: none;
  color: solid black;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  background: #e8f1fb;
  }
  
  
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #e8f1fb;
  
  }
  
  
  
  /* Contenido principal */
  main {
    padding: 42px;
    display: flex;
    flex-direction: row;
    
  
  }
  .perfil{
    background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  padding-bottom: 50px;
  
  
  
  }
  
  .profile-info {
    flex-basis: 10%;
    margin-left: 30px;
  
    
  }
  
  .profile-info h1 {
    margin-top: 0;
    margin-left: 15px;
    
  }
  
  .profile-info img {
    width: 100%;
  }
  
  .edit-form {
    flex-basis: 70%;
    padding-left: 50px;
  }
  
  .informacion {
    border: 1px solid #CCC;
    padding: 20px;
    background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-left:30px;
  }
  
  .informacion h2 {
    margin-top: 0;
  }
  
  .informacion form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .informacion form input {
    display: block;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #CCC;
    margin-bottom: 15px;
    background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .buttons button {
    background-color: #0077FF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .buttons button:first-child {
    background-color: green;
  }
  </style>