<template>
  <div>
  <NAV/>
  </div>
  <div class="container">
    <h1>Venta de entradas</h1>
    <div class="row">
      <div v-for="entrada in entradasJSON" class="col-md-4">
        <Entrada 
          :title="entrada.descripcion"
          :fecha="entrada.fecha"
          :precio="entrada.precio"
          :Limite="entrada.Limite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Entrada from "./components/Entrada.vue";
import NAV from "./components/Nav.vue"
export default {
  components: {
    Entrada,
    NAV
  },
  data() {
    return {
      entradasJSON: [
        {
          descripcion: "Argentina vs Brasil",
          precio: 5000,
          fecha: "Lunes 1 de diciembre",
          Limite: 15
        },
        {
          descripcion: "Alemania vs Brasil",
          precio: 8000,
          fecha: "Viernes 5 de diciembre",
          Limite: 20
        },
        {
          descripcion: "Japon vs Qatar",
          precio: 3000,
          fecha: "Lunes 1 de diciembre",
          Limite: 15
        },
        {
          descripcion: "Japon vs Qatar",
          precio: 3000,
          fecha: "Lunes 1 de diciembre",
          Limite: 30
        }
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(40, 40, 124, 1);
}
h1{
  color: white;
}
</style>
