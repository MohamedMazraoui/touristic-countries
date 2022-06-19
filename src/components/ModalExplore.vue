<template>
  <div class="bg-modal">
    <div class="modal" v-clickaway="closeModal">
      <div class="modal-content">
        <div class="row -mx-2">
          <div class="col p-2" v-for="(image, indexImage) in images" :key="indexImage" >
            <div class="image" :style="{ background: 'url(' + image + ')',backgroundSize:'cover',backgroundPosition:'center' }">
              <img class="w-full" src="/images/1px.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {


    name: 'ModalExplore',

    props:{
      images:{
        type: Array,
        default: null
      }
    },

    methods:{

      // when user clickaway of the modal, we execut this method to emit an event to close the modal
      closeModal(){
        this.$emit('close-modal', true);
      }
    },

    mounted(){


    }
  }


</script>

<style scoped >

/* background to hide interface beyond the modal */
.bg-modal{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000004c2;
  z-index: 3;
  display: flex;
}

/* Modal Style */
.bg-modal .modal{
  width: 90%;
  max-width: 1000px;
  margin: auto;
  background: white;
  z-index: 3;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 10px;
}
.bg-modal .modal .modal-content{
  max-height: calc(100vh - 200px);
  padding: 10px 20px;
  overflow-y: auto;
}
.bg-modal .modal .modal-content .image{
  min-width: 250px;
}
</style>