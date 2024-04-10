<template>
    <footer class="relative z-50 bg-tertiary pt-10 pb-10 px-6 font-Roboto">
        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6">
            <!-- Logo Mobile version -->
            <p class="text-5xl text-white font-bold md:hidden pb-4">Lead<span class="font-normal">box</span></p>
            <!-- Informacion -->
            <div class="flex flex-col text-white text-center md:text-justify space-y-4 md:text-sm text-base md:w-1/4">
                <p>number street, city, province, postal code</p>
                <p>Sales: (XXX) XXX-XXXX</p>
                <p>Parts: (XXX) XXX-XXXX</p>
                <p>Service: (XXX) XXX-XXXX</p>
            </div>
            <!-- Logo e Iconos de Redes Sociales Version Desktop y Tablet -->
            <div class="flex flex-col items-center space-y-8">
                <p class="text-5xl text-white font-bold hidden md:block">Lead<span class="font-normal">box</span></p>
                <div class="hidden md:flex space-x-2">
                    <div v-for="(icon, index) in socialMedia" :key="index" class="cursor-pointer">
                        <a :href="icon.href" target="_blank"><img :src="icon.img" :alt="icon.name" class="w-auto h-auto"></a>
                    </div>
                </div>
            </div>
            <!-- Dropdown de Categorias de Sales, parts y Services -->
            <div class="flex flex-col md:w-3/12 w-full">
                <form class="pb-2">
                    <select id="options" class="w-full lg:w-11/12 uppercase font-bold" v-model="selectedCategory">
                        <option value="sales" class="bg-fifth">Sales</option>
                        <option value="services" class="bg-fifth  text-secondary hover:text-white">Services</option>
                        <option value="parts" class="bg-fifth hover:bg-fifth text-secondary hover:text-white">Parts</option>
                    </select>
                </form>
                <div>
                    <div v-for="(type, schedule) in filteredSchedule" :key="schedule" class="grid grid-cols-2 gap-2 text-white w-full text-xs">
                        <div v-for="(item, index, key) in type" :key="index"  class="flex md:flex-col lg:flex-row">
                            <p class="font-medium">{{index}}:</p>
                            <p class="font-medium">{{item}}</p>
                        </div>   
                    </div>
                </div>
            </div>
            <!-- Iconos Redes Sociales en Mobile version -->
            <div class="flex md:hidden space-x-2">
                <div v-for="(icon, index) in socialMedia" :key="index" class="cursor-pointer">
                    <a :href="icon.href" target="_blank"><img :src="icon.img" :alt="icon.name"></a>
                </div>
            </div>
        </div>
        <!-- Copyright -->
        <p class="text-white text-center pt-4">Sitemap  |  Terms and Conditions  |  Privacy Policy  |  Dealership © 2022  |  Powered by Leadbox</p>
    </footer>
</template>

<script setup>
    import { computed, ref } from 'vue';
    const SRC_ICONS = './assets/icons/'
    

    const socialMedia = [
        {   
            name: 'facebook',
            img: SRC_ICONS + 'facebook.svg',
            href: 'https://www.facebook.com'
        },
        {   
            name: 'twitter',
            img: SRC_ICONS + 'twitter.svg',
            href: 'https://twitter.com'
        },
        {   
            name: 'youtube',
            img: SRC_ICONS + 'youtube.svg',
            href: 'https://www.youtube.com'
        },
        {   
            name: 'instagram',
            img: SRC_ICONS + 'instagram.svg',
            href: 'https://www.instagram.com'
        },
        {   
            name: 'pinterest',
            img: SRC_ICONS + 'pinterest.svg',
            href: 'https://www.pinterest.es'
        },
        {   
            name: 'linkedin',
            img: SRC_ICONS + 'linkedin.svg',
            href: 'https://www.linkedin.com'
        },
    ]
    
    

const schedules = [
  {
    sales: {
      Monday: '8:00am-8:00pm',
      Thursday: '8:00am-8:00pm',
      Tuesday: '8:00am-8:00pm',
      Friday: '8:00am-8:00pm',
      Wednesday: '8:00am-8:00pm',
      Saturday: '8:00am-5:00pm',
      Sunday: 'Closed'
    },
  },
  {
    services: {
      Monday: '8:00am-5:00pm',
      Thursday: '8:00am-5:00pm',
      Tuesday: '8:00am-5:00pm',
      Friday: '8:00am-5:00pm',
      Wednesday: '8:00am-5:00pm',
      Saturday: '10:00am-3:00pm',
      Sunday: 'Closed'
    },
  },
  {
    parts: {
        Monday: '8:00am-5:00pm',
        Thursday: '8:00am-5:00pm',
        Tuesday: '8:00am-5:00pm',
        Friday: '8:00am-5:00pm',
        Wednesday: '8:00am-5:00pm',
        Saturday: '10:00am-3:00pm',
        Sunday: '10:00am-3:00pm'
        },
    }
];

const selectedCategory = ref('sales');

const filteredSchedule = computed(() => {
  const category = selectedCategory.value;
  return schedules.find((entry) => entry[category]);
});



</script>