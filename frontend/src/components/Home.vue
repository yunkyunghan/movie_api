<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators    
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="100%"
                src="https://dvdprime.com/g2/data/file/movie/mania-done-1592708105_SZ5xC2tE_EAB3A0ECA780EB9DBC_VS._ECBDA9.jpg"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="100%"
                src="https://dvdprime.com/g2/data/file/movie/mania-done-1597708895_Z68L02ia_20200818_083214.jpg"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="100%"
                src="https://dvdprime.com/g2/data/cheditor5/2008/mania-done-20200817141336_uuhpvsct.jpg"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>


    </b-carousel>
  </div>
</template>


      
<script>

export default {
  name: 'Home',
  data() {
      return {
        slide: 0,
        sliding: null
      }
},

  methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script> 


<style scoped>
  .img-fluid{
    height: 400px
  }
</style>
