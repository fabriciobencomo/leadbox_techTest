 <template>
  <div class="flex justify-center pt-12 mx-8 lg:mx-16">
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      :navigation="true"
      :modules="modules"
      class="mySwipper"
    >
        <swiper-slide v-for="(car,index) in cars" :key="index">  
                <div class="relative h-60 w-60 md:h-80 md:w-80 md:px-8 lg:w-104 lg:h-96 mx-auto">
                    <img :src="car.img" :alt="car.name" class="h-60 w-60 md:h-80 md:w-80 lg:w-104 lg:h-96 object-fit">
                    <div class="absolute top-0 flex bg-secondary bg-opacity-80 w-full md:w-3/4 lg:w-auto"><p class="text-xs md:text-xl lg:text-lg text-center font-bold p-4 text-secondary">{{car.name}}</p></div>
                    <div class="absolute bottom-0 bg-tertiary w-1/3 flex justify-center"><p class="text-white mx-auto py-1 px-8 font-bold uppercase text-lg leading-7">{{car.stock}}</p></div>
                </div>
        </swiper-slide>   
    </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';


  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
    props: ['cars'],
  };
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: black !important;
}
</style>
