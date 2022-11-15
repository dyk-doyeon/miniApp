import TheCarthumb from "./components/TheCarThumbnail.js";
import Showbox from "./components/TheShowBox.js";

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
      show: false
    }
  },

  components: {
    thecarthumb: TheCarthumb,
    showbox: Showbox
  },

  methods: {
    loadShowBox(car) {
      this.loadBData = car;
      this.show = true;
    }
  }

  }).mount('#app')
})()