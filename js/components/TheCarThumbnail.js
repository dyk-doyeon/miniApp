export default {
  name: "TheCarthumb",

  // emits: ['loadbdata'],

  props: {
    car: Object
  },


  template: 
  `
  <section>
    <li>
      <div>
        <div @click="show ^= true">
          <img :src='"images/"+ car.biopic' alt="cars image" style="width: 380px">
          <h2>{{ car.name }}</h2>
        </div>

        <div class="carBox" v-show="show">
          <div>
            <h2>Car Features</h2>
            <img :src='"images/"+ car.biopic' alt="cars image" style="width: 380px">
            <h3>{{ car.name }}</h3>
            <p>{{ car.description }}</p>
          </div>
        </div>
      </div>
    </li>

    <!--v-if="show"-->
  </section>


  
  `,

  data() {
    return {
      show: false
    }
  },

  methods: {
    // loadBData() {
    //   this.$emit('loadbdata', this.car);
    // }
}


}