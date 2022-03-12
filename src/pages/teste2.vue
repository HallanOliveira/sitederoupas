<template>
  <div>
      <!--cards for desktop-->
      <div class="row">
        <div class="col-xs-12 col-md-3"
          align="Center"
          v-for="(post, index) of posts.slice(v1, v2)"
          :key="index"
          row-key="post.id">
        <q-card
          id="estoque"
          class="card q-ma-lg"
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
          <div class="row">
            <q-card-actions class="col-12 justify-center">
              <q-btn class="col-12"  @click="details()" flat>ver mais</q-btn>
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

  </div>
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

    details(){
      window.location.href = "/#/teste5";
    }
  },
};

</script>
