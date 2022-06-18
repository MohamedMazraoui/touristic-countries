<template>
  <div class="card">
    <div class="card-content">
      <p class="country">Front-end</p>
      <h2 class="city">Barcelona</h2>
    </div>
    <div class="card-back">
      <p class="country">Front-end</p>
      <h2 class="city">Barcelona</h2>
      <p class="description">Valtech est une agence digitale axée sur la transformation des entreprises et nourrie par l'innovation. Nous permettons à nos clients.</p>
      <button class="button mt-2">Explore More</button>
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
  min-height: 350px;
  display: flex;
  color: #FFF;
  padding: 50px 20px;
  transform: rotateY(0deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card:hover{
  transform: rotateY(180deg);
}
.card:hover .card-content{
  display: none;
}
.card:hover .card-back{
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