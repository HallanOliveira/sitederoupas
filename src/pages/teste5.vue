<template>
<q-page>
    <div class="row">
      <q-table
        grid
        title="Estoque"
        row-key="id"
        :data="posts"
        :columns="columns"
        transition="scale"
        class="col"
        dense
        separator="cell">  
        </q-table>  
        <p>{{ posts }}</p>
    </div>
</q-page>
 </template>

<script>
export default {
  name: 'Page4',
  data () {
     return {
      columns: [
       {
         name: 'url',
         label: 'Id Post',
         field: 'url',
         align:'left',
         sortable: true
         },
         {
           name: 'id',
           label: 'Título',
           field: 'id',
           align: 'left',
           sortable: true
         },
         {
           name: 'title',
           label: 'Descrição',
           field: 'title',
           align: 'left',
           sortable: true
         }
        ],
      posts:[]  ,
      selecao:[]
    }
  },
  mounted(){
    this.getPosts ()
  },
  methods:{
    getPosts (){
      this.$axios.get ('http://app.revendamais.com.br/application/index.php/apiGeneratorXml/generator/appdaloja/b5fa399849487d28e5084ae2e8b33c682742.json')
      .then((res) => {
        this.posts = res.data
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
