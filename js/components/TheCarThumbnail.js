export default {
  name: "TheCarthumb",

  emits: ['loadbdata'],

  props: {
    car: Object
  },

  template: 
  `
  <li @click="loadBData">
    <img :src='"images/"+ car.biopic' alt="cars image" style="width: 380px">
    <!--<div class="sprite" id="cap"></div>-->
    <div class="red-bumper"></div>
    <h2>{{car.name}}</h2>
  </li>
  `,

  methods: {
    loadBData() {
      //pass the individual object back to the main VM
      this.$emit('loadbdata', this.car);
    }
  }

}