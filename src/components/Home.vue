<template>
  <div class="py-4 container">
    <!-- <h1 class="green">Home Page</h1> -->
    <HeaderCard class="mb-2" />
    <!-- <Card /> -->
    <div class="row -mx-2">
      <div class="col p-2">
        <div class="row -mx-2">
          <div class="col px-2">
            <Card />
          </div>
          <div class="col px-2">
            <Card />
          </div>
        </div>
      </div>
      <div class="col p-2">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>

  import HeaderCard from "./HeaderCard.vue"
  import Card from "./Card.vue"


  export default {


    name: 'Home',
    components: {
      HeaderCard,
      Card
    },
    data(){
      return{


      };
    },

    methods:{


    },

    async mounted(){


    },
    created(){


    }

  }
</script>

<style scoped>


</style>