import TheCarthumb from "./components/TheCarThumbnail.js";

// import Lightbox from "./components/TheLightbox.js";

(() => {
  // create vue instance here
  const { createApp } = Vue

  createApp({
    created() {
    // get remote data
      fetch('./data.json')
      .then(res => res.json())
      .then(data => this.carData = data)
      .catch(error => console.error(error));        
    },

  data() {
    return {
      carData: {},
      loadBData: {},
      // showLightBox:false
    }
  },

  components: {
    thecarthumb: TheCarthumb,
    // lightbox: Lightbox
  },

  // methods: {
  //   loadLightbox(hero) {
  //     this.loadBData = hero;
  //     this.showLightBox = true;
  //   }
  // }

  }).mount('#app')
})()