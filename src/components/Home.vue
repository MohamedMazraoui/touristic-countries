<template>
  <div class="py-4 container">

    <div v-if="loadingCountries" class="container loading-skeleton">
      <div class="row">
        <div class="col">
          <div class="card">
            <img src="//placekitten.com/300/200" class="card-img-top" alt="...">
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="//placebear.com/300/200" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- Header Card -->
      <HeaderCard class="mb-2" />

      <!-- Loop On Each Group Card's -->
      <div v-for="(countryGroup, indexGroup) in countries" :key="indexGroup"  class="row -mx-2">

        <!-- Card Touristic country with a small condition set class "col-2" in {First Card in the First Group and Last Card in second Group} -->
        <div v-for="(country, indexCountry) in countryGroup" :key="indexCountry" :class="['p-2', ((indexGroup == 0 && indexCountry == 0) || (indexGroup == 1 && indexCountry == countryGroup.length-1)) ? 'col-2' : 'col']">

          <!-- Component Card with prop contain Data Country -->
          <Card :currentCountry="country" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // Import Header Card Component
  import HeaderCard from "./HeaderCard.vue"

  // Import Card Component
  import Card from "./Card.vue"

  // Import Axios to get Data
  import axios from 'axios';


  export default {

    // Component Name
    name: 'Home',

    components: {
      HeaderCard,
      Card
    },

    data(){
      return{

        loadingCountries: true,
        countries: {
          0: [
            {
              "country_name": "Italy",
              "capital": "Venice",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/italy/img6.jpeg",
              "images": [
                "/images/italy/img1.jpeg",
                "/images/italy/img2.jpeg",
                "/images/italy/img3.jpeg",
                "/images/italy/img4.jpeg",
                "/images/italy/img5.jpeg",
                "/images/italy/img6.jpeg"
              ]
            },
            {
              "country_name": "Germany",
              "capital": "Berlin",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/italy/img2.jpeg",
              "images": [
                "/images/germany/img1.jpeg",
                "/images/germany/img2.jpeg",
                "/images/germany/img3.jpeg",
                "/images/germany/img4.jpeg",
                "/images/germany/img5.jpeg",
                "/images/germany/img6.jpeg"

              ]
            },
            {
              "country_name": "Spain",
              "capital": "Barcelona",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/spain/img1.jpeg",
              "images": [
                "/images/spain/img1.jpeg",
                "/images/spain/img2.jpeg",
                "/images/spain/img3.jpeg",
                "/images/spain/img4.jpeg",
                "/images/spain/img5.jpeg",
                "/images/spain/img6.jpeg"
              ]
            },
          ],
          1: [
            {
              "country_name": "France",
              "capital": "Paris",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/france/img5.jpeg",
              "images": [
                "/images/france/img1.jpeg",
                "/images/france/img2.jpeg",
                "/images/france/img3.jpeg",
                "/images/france/img4.jpeg",
                "/images/france/img5.jpeg",
                "/images/france/img6.jpeg"
              ]
            },
            {
              "country_name": "Netherlands",
              "capital": "Amsterdam",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/netherland/img2.jpeg",
              "images": [
                "/images/netherland/img1.jpeg",
                "/images/netherland/img2.jpeg",
                "/images/netherland/img3.jpeg",
                "/images/netherland/img4.jpeg",
                "/images/netherland/img5.jpeg",
                "/images/netherland/img6.jpeg"
              ]
            },
            {
              "country_name": "United Kingdon",
              "capital": "London",
              "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
              "img": "/images/united_kingdom/img1.jpeg",
              "images": [
                "/images/united_kingdom/img1.jpeg",
                "/images/united_kingdom/img2.jpeg",
                "/images/united_kingdom/img3.jpeg",
                "/images/united_kingdom/img4.jpeg",
                "/images/united_kingdom/img5.jpeg",
                "/images/united_kingdom/img6.jpeg"
              ]
            },
          ],
        }

      };
    },

    methods:{

      // Get Touristic Countries using Axios and return the results
      // async getTouristicCoutries(){

      //     try{
      //       const res = await axios('https://mohamedmazraoui.github.io/touristic-countries/countries.json');
      //       console.log("res: ", res);
      //       return res;
      //     }catch(error){
      //       console.log("error: ", error);
      //       return error;
      //     }
      // },
    },

    async mounted(){

      // this.loadingCountries = true;
      // try {

      //   let getCountries = await this.getTouristicCoutries();
      //   if (getCountries && getCountries.data && getCountries.data.length) {
      //     // console.log("getCountries.data: ", typeof getCountries.data);
      //     // console.log("getCountries.data 1: ", unescape(getCountries.data));
      //     this.countries = JSON.parse(JSON.stringify(getCountries.data));
      //     console.log("this.countries: ", typeof this.countries);
      //     // console.log("this.countries: ", JSON.parse(this.countries));
      //   }

      // } catch (error) {
      //   console.log("error: ", error);
      // }
      // this.loadingCountries = false;


    },
    created(){


    }

  }
</script>

<style scoped>

%loading-skeleton {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;

  &::placeholder {
    color: transparent;
  }
}
%loading-skeleton::placeholder {
  color: transparent;
}
@keyframes loading-skeleton {
  from {
    opacity: .4;
  }
  to {
    opacity: 1;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;
}
.loading-skeleton img {
  filter: grayscale(100) contrast(0%) brightness(1.8);
}
</style>