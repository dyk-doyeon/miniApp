import TheCarthumb from "./components/TheCarThumbnail.js";

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
      // loadBData: {},
      show: false
    }
  },

  components: {
    thecarthumb: TheCarthumb
  }

  // methods: {
  //   // toggleShow(car) {
  //   //   this.loadBData = car;
  //   //   this.show = !this.show;
  //   // }
  // }

  }).mount('#app')
})()