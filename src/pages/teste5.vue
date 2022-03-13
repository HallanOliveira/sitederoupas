<template>
  <div class="row q-pa-lg">
    <div class="col-md-6 col-sm-12">
      <q-img src="https://placeimg.com/500/300/nature" class="image-detail"/>
      <div class="row q-pt-lg">
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
        <q-img src="https://placeimg.com/500/300/nature" class="thumbnail"/>
      </div>
    </div>
    <div class="col-md-6 col-sm-12 details">
      <div class="text-h4 q-pb-md">Teste título</div>
      <div class="q-pb-md">Marca: teste</div>
      <div class="q-pb-md">Cor: Preta</div>
      <div class="values">
        <div class="price">R$: 190,00</div>
        <div class="parcelas">3x de 34,00</div>
      </div>
      <div class="q-pt-md row">
        <div class="row col-md-6">
          <q-input outlined v-model="cep" label="Calcular frete:" placeholder="Digite seu CEP" class="q-pr-sm col-md-9" mask="#####-###"/>
          <q-btn class="col-md-3" color="grey" label="Calcular" @click="searchCEP()" />
        </div>
        <div class="q-pl-md col-md-6 row">
          <div class="col-md-6">{{ cidade }}</div>
          <div class="col-md-6">{{ codigoPostal }}</div>
        </div>
      </div>
      <div class="q-pt-md">
        <q-btn color="green" icon="shopping_cart" label="Comprar" class="btn-buy"/>
      </div>
    </div>
  </div>
 </template>


<script>
export default {
  name: 'Details',
    data() {
      return {
        url_cep: "https://viacep.com.br/ws/",
        cep: "",
        type: "json",
        cidade: '',
        codigoPostal: '',
      };
    },
    methods: {
      searchCEP(){
        let cep = this.cep.replace('-','')
        fetch(this.url_cep + '/' + cep + '/' + this.type)
          .then(response => response.json())
          .then(data => (
            this.cidade = data.uf + '/' +data.localidade,
            this.codigoPostal = data.cep
          ))
      },
    }
}

</script>
