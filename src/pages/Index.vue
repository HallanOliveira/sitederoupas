<template>
  <div>
    <div>
      <div class="gt-sm">
        <q-carousel class="shadow-5"
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"    >
            <q-carousel-slide :name="1" img-src="../img/banner5.jpg"/>
            <q-carousel-slide :name="2" img-src="../img/banner6.jpg"/>
        </q-carousel>
      </div>

      <div class="row q-pa-lg text-h4 text-pink-10 gt-sm">
          <div class="col-12" align="Center">
            <q-card class="shadow-10">
              <q-card-section>
                <strong>Categorias:</strong>
              </q-card-section>
            </q-card>
          </div>
      </div>

      <div class="row q-pa-md">
        <div class="col-xs-12 col-md-3 q-pa-md" align="Center">
          <q-card class="shadow-10 card">
            <q-card-section>
              <q-img src="../img/blusinha.jpeg"/>
            </q-card-section>
            <q-card-actions class="justify-center text-pink-10">
              <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo1 }}</b></q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-xs-12 col-md-3 q-pa-md" align="Center">
          <q-card class="shadow-10 card">
            <q-card-section>
              <q-img src="../img/calça.jpg"/>
            </q-card-section>
            <q-card-actions class="justify-center text-pink-10">
              <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo2 }}</b></q-btn>
           </q-card-actions>
          </q-card>
        </div>

        <div class="col-xs-12 col-md-3 q-pa-md" align="Center">
          <q-card class="shadow-10 card">
            <q-card-section>
              <q-img src="../img/short.jpg"/>
            </q-card-section>
            <q-card-actions class="justify-center text-pink-10">
              <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo3 }}</b></q-btn>
           </q-card-actions>
          </q-card>
        </div>

        <div class="col-xs-12 col-md-3 q-pa-md" align="Center">
          <q-card class="shadow-10 card">
            <q-card-section>
              <q-img src="../img/1528528031_1GG.webp"/>
            </q-card-section>
            <q-card-actions class="justify-center text-pink-10">
              <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo4 }}</b></q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      url: 'https://google.com',
      slide: 1,
      autoplay: true,
      Titulo1: 'Blusinhas',
      Titulo2: 'Calças',
      Titulo3: 'Shorts',
      Titulo4: 'Jaquetas',
      linkprod: '/teste2',
      linkwpp: 'https://api.whatsapp.com/send/?phone=5541997867176&text&app_absent=0'
    }
  }
}

</script>


