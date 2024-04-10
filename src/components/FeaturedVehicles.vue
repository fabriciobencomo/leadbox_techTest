<template>
    <div class="mt-1 bg-secondary pb-20">
        <p class="text-3xl uppercase font-bold text-secondary text-center pt-10">Featured <span> Vehicles</span></p>
        <!-- Carrusel de Carros a la venta -->
        <Carousel :cars="cars"></Carousel>
    </div>
    <!-- Seccion de Blogs -->
    <div>
        <div class="flex flex-col md:flex-row justify-around bg-white pt-10">
            <div v-for="news in news" :key="news.id" class="flex flex-col px-8 md:px-5 lg:px-8 pb-4" >
                <div :class="news.id > howManyNews ? 'hidden' : '' ">
                    <div class="relative">
                        <img :src="news.img" :alt="news.title" class="md:w-114 md:h-64 lg:w-140 lg:h-80 h-72 w-full border border-white border-b-10">
                        <img src="../assets/borders/border-arrow.png" alt="border" class="absolute bottom-0" :class="howManyNews == 2 ? 'hidden' : ''">
                    </div>
                    <p class="text-3xl font-bold text-secondary">{{news.title}}</p>
                    <p class="font-normal pt-4 text-primary">{{news.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref  } from 'vue'
import Carousel from './carousel/Carousel.vue';

const SRC_IMAGES = './assets/featuredVehicles/'

const windowWidth = ref(window.innerWidth)
const howManyNews = ref(showElements())

const cars = [
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
    {
        name:'2016 Tesla Model X P90D Ludicrous',
        img: SRC_IMAGES + 'tesla-car.png',
        stock:'sold'
    },
]

const title = 'Proin in lorem tortor'
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.'

const news = [
    {   
        id: 1,
        img: SRC_IMAGES + 'img-1.png',
        title:title,
        text: loremIpsum
    },
    {
        id: 2,
        img: SRC_IMAGES + 'img-2.png',
        title:title,
        text: loremIpsum
    },
    {
        id: 3,
        img: SRC_IMAGES + 'img-3.png',
        title:title,
        text: loremIpsum
    }
]


function showElements() {
    if(windowWidth.value >= 768 && windowWidth.value <= 1024){
        return 2
    }else{
        return 3
    }
}

onMounted(() => {
    window.onresize = () => {
      windowWidth.value = window.innerWidth
      howManyNews.value = showElements()
    }
})

</script>
