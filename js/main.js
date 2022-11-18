import TheCarthumb from "./components/TheCarThumbnail.js";
import Showbox from "./components/TheShowBox.js";

(() => {

  // Slider
    
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let slides = document.getElementsByClassName("slides"),
          dots = document.getElementsByClassName("dot");
          
      let i;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3500); 
  }

  // create vue instance here
  const { createApp } = Vue
  

  createApp({
    created() {
    // get remote data
      fetch('./scripts/json.php')
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