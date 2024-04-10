<template>
    <!-- Slider Hero -->
    <Slider :slides="slides" :interval="4000" indicators controls></Slider>
</template>
<script setup>
import Slider from './slider/Slider.vue';

const heroSlide = "./assets/hero/imagen-hero.png"

const slides = [
        heroSlide,
        heroSlide,
        heroSlide,
    ]


</script>