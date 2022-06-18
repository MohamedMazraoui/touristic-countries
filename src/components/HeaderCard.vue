<template>
  <div class="card">
    <div class="card-content">
      <p class="country">Front-end</p>
      <h2 class="city">Valtech_</h2>
      <p class="description">Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.</p>
    </div>
  </div>
</template>

<script>


</script>

<style scoped >

.card{

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url("https://picsum.photos/seed/picsum/1000/1000");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  height: 100%;
  display: flex;
  color: #FFF;
  padding: 200px 50px;

}
.card .card-content{

  margin: auto;
  text-align: center;
  max-width: 700px;

}
.card .card-content .country{

  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 18px;
  font-weight: 400;

}
.card .card-content .city{

  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 42px;
  margin-top: 20px;
  margin-bottom: 20px;

}
.card .card-content .description{
  line-height: 150%;
  font-size: 18px;
}
</style>