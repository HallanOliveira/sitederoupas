<template>
  <q-page>
    <!-- SideBar filters Lateral -->
    <div class="row">
      <div class="side-filter col-2 gt-sm">
        <div class="text-h4 text-black text-center q-mt-md">Filtros:</div>
        <div class="q-pa-lg">
          <q-input v-model="text" filled autogrow label="Busque por descrição:" color="black" class="q-mb-lg">
           <template v-slot:append>
             <q-icon name="search" />
           </template>
          </q-input>
          <q-select filled v-model="model" :options="options" label="Ordenar por:" class="q-mb-lg"/>
          <q-option-group
            :options="options3"
            type="checkbox"
            v-model="options2"
          />
        </div>
      </div>
      <div class="row col-10 justify-center">
        <!--cards for desktop-->
        <q-card
          id="estoque"
          class="my-card col-3 q-ma-lg"
          v-for="(post, index) of posts.slice(v1, v2)"
          :key="index"
          row-key="post.id">
          <q-img :src="post.url">
            <div class="absolute-bottom">
              <div class="text-h6">
                ID: {{ post.id }}
                <br />
                Cont: {{ index }}
              </div>
              <div class="text-subtitle2">{{ post.title }}</div>
            </div>
          </q-img>
          <div class="row">
            <q-card-actions class="col-12 justify-center">
              <q-btn class="col-12" flat>ver mais</q-btn>
            </q-card-actions>
          </div>
        </q-card>
        </div>
        <div class="row col-12 justify-center mobile-only">
        <!--cards for mobile-->
        <q-card
          id="estoque"
          class="my-card q-ma-lg"
          v-for="(post, index) of posts.slice(v1, v2)"
          :key="index"
          row-key="post.id"
        >
          <q-img :src="post.url">
            <div class="absolute-bottom">
              <div class="text-h6">
                ID: {{ post.id }}
                <br />
                Cont: {{ index }}
              </div>
              <div class="text-subtitle2">{{ post.title }}</div>
            </div>
          </q-img>
          <div>
            <q-card-actions class="col-12 justify-center">
              <q-btn flat>ver mais</q-btn>
            </q-card-actions>
          </div>
        </q-card>
      </div>
    </div>
    
      <q-separator class="q-mb-md" />

      <div class="row justify-center q-pb-lg">
        <q-pagination
          @click="paginar()"
          v-model="current"
          color="black"
          :max="getPagesNumber()"
          :max-pages="6"
          boundary-links
        />
      </div>

  </q-page>
</template>

<script>
import api from "../services/api";
import Index from './Index.vue';
export default {
  components: { Index },
  name: "teste2",
  data() {
    return {
      //pagina atual
      current: 1,

      //dados da API
      posts: [],

      //indice do array inicial para mostrar na pagina
      v1: 0,

      //indice do array final para mostrar na pagina
      v2: 12,

      options: ['Preço','tipo','Avaliação'],
      options2: [
        ['LV',  1],
        ['Prada', 2],
        ['teste', 3],
      ]
    };
  },

  //executa ao acessar a pagina
  mounted() {
    this.getPosts();   
  },

  //consome os dados da API
  methods: {
    getPosts() {
      api.get().then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

    },

    //calcula o numero total de paginas de acordo com os itens da API
    getPagesNumber() {
      return parseInt(this.posts.length / 12);
    },

    //troca os indices do array à serem exibidos e volta a pagina para o topo
    paginar() {
      var pagination = [(this.v1 = this.current * 12 - 12), (this.v2 = this.current * 12)];
      window.scrollTo(0,0);
      return pagination;
    },
  },
};

</script>
