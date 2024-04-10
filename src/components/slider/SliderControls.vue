<template>
    <button class="border-none inline-block absolute h-14 w-10 top-2/4 cursor-pointer left-4" @click="$emit('prev')"><img src="../../assets/buttons/left-chevron.svg" alt="chevron-left"></button>
    <button class="border-none inline-block absolute h-14 w-10 top-2/4 cursor-pointer right-4" @click="$emit('next')"><img src="../../assets/buttons/right-chevron.svg" alt="right-chevron"></button>
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"]
  };
  </script>
