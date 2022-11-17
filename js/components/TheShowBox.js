export default {
    name: 'TheShowbox',

    props: ['car'],


    template: 
    `   <section class="showBox">
          <div class="imgClose">
            <img @click="closeLB" src="images/up_arrow.svg" class="lightbox_close">
            <h2>Car Features</h2>
          </div>
          <div class="carBox">
            <div class="imgBox">
              <img :src='"images/"+ car.lbBG' alt="cars image">
            </div>
            <div class="desBox">
              <h2>{{ car.name }}</h2>
              <p>{{ car.description }}</p>
            </div>
          </div>
        </section>
    `,

    methods: {
      closeLB() {
        this.$emit('closelb');
      }
  }
}