<template>
  <div class="card-container">
  <!-- :style='"background: linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url('"+currentCountry.img+"')"' -->
    <div class="card" :style="{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(/images/' + currentCountry.country_name.toLowerCase() + '/img1.jpeg)',backgroundSize:'cover',backgroundPosition:'center' }" >
      <div class="card-content">
        <p class="country">{{currentCountry.country_name}}</p>
        <h2 class="city">{{currentCountry.capital}}</h2>
      </div>
      <div class="card-back">
        <p class="country">{{currentCountry.country_name}}</p>
        <h2 class="city">{{currentCountry.capital}}</h2>
        <p class="description">V{{currentCountry.description}}</p>
        <button @click.stop="exploreMore()" class="button mt-2">Explore More</button>
        <teleport to="#app">
          <ModalExplore v-if="openExplore" @close-modal="closeModal"></ModalExplore>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script>

import ModalExplore from "./ModalExplore.vue"

export default {


    name: 'Card',
    components: {
      ModalExplore
    },
    props: {
      currentCountry: {
        type: Object, default: null
      }
    },
    data(){
      return{
        openExplore: false

      };
    },

    methods:{

      exploreMore(){
        this.openExplore = true;
      },
      closeModal(data){
        console.log("data: ", data);
        if (data) {
          this.openExplore = false;
        }
      }
    },

    mounted(){


    }
  }

</script>

<style scoped >


.card{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  height: 100%;
  min-height: 350px;
  display: flex;
  color: #FFF;
  padding: 50px 20px;
  transform: rotateY(0deg);
  transition: transform .8s;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card-container:hover .card{
  transform: rotateY(180deg);
}
.card-container:hover .card .card-content{
  display: none;
}
.card-container:hover .card .card-back{
  display: block;
}

.card .card-content{
  margin: auto;
  text-align: center;
  max-width: 700px;
}
.card .card-back{
  margin: auto;
  text-align: center;
  max-width: 700px;
}
.card .card-back{
  transform: rotateY(180deg);
  display: none;
}
.card .card-content .country{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: 300;
}
.card .card-content .city{

  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 38px;
  margin-top: 20px;
}

.card .card-back .country{
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 300;
}
.card .card-back .city{

  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 28px;
  margin-top: 15px;
}
.card .card-back .description{
  line-height:150%;
}
.card .card-back .button{
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.card .card-back .button:hover{
  background-color: rgba(0,0,1,0.2);
}

</style>