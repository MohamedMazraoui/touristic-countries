<template>
  <div class="py-4 container">

    <!-- Page Loading -->
    <div v-if="loadingCountries" class="loading-container">

        <div class="loader loader--style1" title="0">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
          <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
          <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
    </div>

    <!-- Page Error -->
    <div v-else-if="error">
      <h3 class="text-center error">{{error}}</h3>
    </div>

    <!-- Page Result -->
    <div v-else >
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

        loadingCountries: false,
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
        },
        error: null

      };
    },

    methods:{

      // Get Touristic Countries using Axios and return the results
      async getTouristicCoutries(){

          try{
            const res = await axios('https://mohamedmazraoui.github.io/touristic-countries/countries.json');
            console.log("res: ", res);
            // res.data = [
            //   {
            //     "country_name": "Italy",
            //     "capital": "Venice",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/italy/img6.jpeg",
            //     "images": [
            //       "/images/italy/img1.jpeg",
            //       "/images/italy/img2.jpeg",
            //       "/images/italy/img3.jpeg",
            //       "/images/italy/img4.jpeg",
            //       "/images/italy/img5.jpeg",
            //       "/images/italy/img6.jpeg"
            //     ]
            //   },
            //   {
            //     "country_name": "Germany",
            //     "capital": "Berlin",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/italy/img2.jpeg",
            //     "images": [
            //       "/images/germany/img1.jpeg",
            //       "/images/germany/img2.jpeg",
            //       "/images/germany/img3.jpeg",
            //       "/images/germany/img4.jpeg",
            //       "/images/germany/img5.jpeg",
            //       "/images/germany/img6.jpeg"

            //     ]
            //   },
            //   {
            //     "country_name": "Spain",
            //     "capital": "Barcelona",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/spain/img1.jpeg",
            //     "images": [
            //       "/images/spain/img1.jpeg",
            //       "/images/spain/img2.jpeg",
            //       "/images/spain/img3.jpeg",
            //       "/images/spain/img4.jpeg",
            //       "/images/spain/img5.jpeg",
            //       "/images/spain/img6.jpeg"
            //     ]
            //   },
            //   {
            //     "country_name": "France",
            //     "capital": "Paris",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/france/img5.jpeg",
            //     "images": [
            //       "/images/france/img1.jpeg",
            //       "/images/france/img2.jpeg",
            //       "/images/france/img3.jpeg",
            //       "/images/france/img4.jpeg",
            //       "/images/france/img5.jpeg",
            //       "/images/france/img6.jpeg"
            //     ]
            //   },
            //   {
            //     "country_name": "Netherlands",
            //     "capital": "Amsterdam",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/netherland/img2.jpeg",
            //     "images": [
            //       "/images/netherland/img1.jpeg",
            //       "/images/netherland/img2.jpeg",
            //       "/images/netherland/img3.jpeg",
            //       "/images/netherland/img4.jpeg",
            //       "/images/netherland/img5.jpeg",
            //       "/images/netherland/img6.jpeg"
            //     ]
            //   },
            //   {
            //     "country_name": "United Kingdon",
            //     "capital": "London",
            //     "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            //     "img": "/images/united_kingdom/img1.jpeg",
            //     "images": [
            //       "/images/united_kingdom/img1.jpeg",
            //       "/images/united_kingdom/img2.jpeg",
            //       "/images/united_kingdom/img3.jpeg",
            //       "/images/united_kingdom/img4.jpeg",
            //       "/images/united_kingdom/img5.jpeg",
            //       "/images/united_kingdom/img6.jpeg"
            //     ]
            //   },
            // ];
            return res
          }catch(error){
            console.log("error: ", error);
            return error;
          }
      },
    },

    async mounted(){

      this.loadingCountries = true;
      try {

        let getCountries = await this.getTouristicCoutries();
        if (getCountries && getCountries.data && getCountries.data.length) {

          // Split Countries to multiple Groups, Each group has 3 countries
          let calcTreeNumber = 0;
          let indexGroup = 0
          getCountries.data.map((country)=>{

            if (calcTreeNumber >= 3) {
              calcTreeNumber = 0;
              indexGroup += 1;
            }
            if (calcTreeNumber == 0) {
              this.countries[indexGroup] = [];
            }
            this.countries[indexGroup].push(country)
            calcTreeNumber++;

          })
        }

      } catch (error) {
        this.error = error;
        console.log("error: ", error);
      }
      this.loadingCountries = false;


    },
    created(){


    }

  }
</script>

<style scoped>

.loading-container{
  height: 100vh;
  display: flex;
}
.loader{
  margin: auto;
}

/*
  Set the color of the icon
*/
svg path,
svg rect{
  fill: #212125;
}
</style>