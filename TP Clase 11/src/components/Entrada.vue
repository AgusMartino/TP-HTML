<template>
  <div v-if="Limite - cantidadComprada <= 5">
    <div 
      id="card"
      class="card text-bg-dark bg-dark mb-3 text-white border border-warning"
      style="max-width: 18rem"
    >
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <h5 class="card-title">Fecha: {{ fecha }}</h5>
        <p class="card-text">${{ precio }}</p>
        <p>Cantidad comprada: {{ cantidadComprada }} / {{Limite}}</p>
        <p>Recaudacion: ${{recaudacion}}</p>
        <button @Click="comprarEntrada()" class="btn btn-success">Comprar</button>
        <div class="rounded mt-2 d-flex justify-content-center aling-items-center" style="background-color: #FFFCAC; color: black; height: 45px">
            <p class="aling-self-center">Ultimas {{Limite - cantidadComprada}} Entradas!!!!!</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div 
      id="card"
      class="card text-bg-dark bg-dark mb-3 text-white"
      style="max-width: 18rem"
    >
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <h5 class="card-title">Fecha: {{ fecha }}</h5>
        <p class="card-text">${{ precio }}</p>
        <p>Cantidad comprada: {{ cantidadComprada }} / {{Limite}}</p>
        <p>Recaudacion: ${{recaudacion}}</p>
        <button @Click="comprarEntrada()" class="btn btn-success">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    fecha: String,
    precio: Number,
    Limite: Number,
  },
  data() {
    return {
      cantidadComprada: 0,
    };
  },
  computed: {
    recaudacion() {
      return this.cantidadComprada * this.precio;
    },
  },
  methods: {
    comprarEntrada() {
      this.cantidadComprada = this.cantidadComprada + 1;
    },
  },
};
</script>
