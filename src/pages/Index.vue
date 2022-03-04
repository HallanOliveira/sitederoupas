<template>
  <div>
    <div class="desktop-only">
      <q-carousel id="carrosel1" class="shadow-5"
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
          <q-carousel-slide :name="1" img-src="../img/banner1.jpg"/>
          <q-carousel-slide :name="2" img-src="../img/curiosidades-sobre-o-valentines-day.jpg">
          <p class="text-h3 text-white q-pt-xl absolute-center text-center">
            Dia dos namorados 
            <br> 
            é na MH Modas!
          </p>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="row justify-center text-h4 q-mt-lg text-pink-10">
      <strong>Nossos produtos:</strong>
    </div>

    <div class="row justify-around q-mt-lg" align="center">
      <div class="category-card">
        <q-card class="my-card shadow-10">
          <q-card-section>
            <q-img src="../img/blusinha.jpeg"/>
          </q-card-section>
          <q-card-actions class="justify-center text-pink-10">
            <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo1 }}</b></q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="category-card">
        <q-card class="my-card shadow-10">
          <q-card-section>
            <q-img src="../img/calça.jpg"/>
          </q-card-section>
          <q-card-actions class="justify-center text-pink-10">
            <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo2 }}</b></q-btn>
         </q-card-actions>
        </q-card>
      </div>

      <div class="category-card">
        <q-card class="my-card shadow-10">
          <q-card-section>
            <q-img src="../img/short.jpg"/>
          </q-card-section>
          <q-card-actions class="justify-center text-pink-10">
            <q-btn flat v-bind:to="linkprod" size="20px"><b>{{ Titulo3 }}</b></q-btn>
         </q-card-actions>
        </q-card>
      </div>

      <div class="category-card">
        <q-card class="my-card shadow-10">
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


