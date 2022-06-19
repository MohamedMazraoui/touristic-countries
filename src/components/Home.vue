<template>
  <div class="py-4 container">

    <HeaderCard class="mb-2" />
    <div class="row -mx-2">
      <div v-for="(country, indexCountry) in countries" :key="indexCountry" class="col p-2">
        <Card :currentCountry="country" />
      </div>
      <!-- <div class="col p-2">
        <Card />
      </div>
      <div class="col-2 p-2">
        <Card />
      </div> -->
    </div>
  </div>
</template>

<script>

  import HeaderCard from "./HeaderCard.vue"
  import Card from "./Card.vue"
  import axios from 'axios';


  export default {


    name: 'Home',
    components: {
      HeaderCard,
      Card
    },
    data(){
      return{

        loadingCountries: false,
        countries: [
          {
            "country_name": "Italy",
            "capital": "Venice",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/xkCBtWKH",
            "images": [
              "https://postimg.cc/3ycV6nBq",
              "https://postimg.cc/Yv8JNpmM",
              "https://postimg.cc/F7btRbrf",
              "https://postimg.cc/2VNRr9DR",
              "https://postimg.cc/xX9wbk86",
              "https://postimg.cc/xkCBtWKH"
            ]
          },
          {
            "country_name": "Germany",
            "capital": "Berlin",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/CRFKLxgg",
            "images": [
              "https://postimg.cc/zbRzPLnn",
              "https://postimg.cc/CRFKLxgg",
              "https://postimg.cc/7CRPV1TH",
              "https://postimg.cc/3058MKBz",
              "https://postimg.cc/XZq7d1q1",
              "https://postimg.cc/XrQYZ6jy"

            ]
          },
          {
            "country_name": "Spain",
            "capital": "Barcelona",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/rz1c02gF",
            "images": [
              "https://postimg.cc/rz1c02gF",
              "https://postimg.cc/hfKnVZ38",
              "https://postimg.cc/cvbNyx1T",
              "https://postimg.cc/zHF19T3R",
              "https://postimg.cc/hXjq5znf",
              "https://postimg.cc/xcg25GWw"
            ]
          },
          {
            "country_name": "France",
            "capital": "Paris",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/njvhdb1T",
            "images": [
              "https://postimg.cc/0Kn2sYFw",
              "https://postimg.cc/XGMvc79p",
              "https://postimg.cc/1Vs52CCS",
              "https://postimg.cc/mhsYTTKL",
              "https://postimg.cc/njvhdb1T",
              "https://postimg.cc/ThJrwZXr"
            ]
          },
          {
            "country_name": "Netherlands",
            "capital": "Amsterdam",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/HryCmGJg",
            "images": [
              "https://postimg.cc/grgpqH9f",
              "https://postimg.cc/HryCmGJg",
              "https://postimg.cc/H8kg1VMZ",
              "https://postimg.cc/NLsYHPn6",
              "https://postimg.cc/tYfH8R4k",
              "https://postimg.cc/gnrWMLmr"
            ]
          },
          {
            "country_name": "United Kingdon",
            "capital": "London",
            "description": "Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.",
            "img": "https://postimg.cc/Fd2j2Jwm",
            "images": [
              "https://postimg.cc/Fd2j2Jwm",
              "https://postimg.cc/1g70rdH8",
              "https://postimg.cc/75VnfhJM",
              "https://postimg.cc/LYqtCVCN",
              "https://postimg.cc/JsmQrZ0z",
              "https://postimg.cc/f3RjXsx4"
            ]
          },
        ]

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


</style>