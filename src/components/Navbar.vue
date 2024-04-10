<template>
    <nav class="bg-white md:shadow-xl z-10">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 md:shadow-5xl w-full">
        <div class="relative flex items-center justify-between h-10 mx-4">
          <!-- Logo  -->
            <div class="flex w-2/4">
                <div class="px-2 py-3 w-full justify-start">
                    <img class="h-6 block cursor-pointer" src="../assets/logos/leadboxLogoBlack.svg" alt="Logo Leadbox">
                </div>
            </div>
          <!-- Menu -->
            <div class="hidden md:block z-20">
              <div class="ml-10 flex items-baseline space-x-4">
                <div v-for="(dropdown, index) in dropdowns" :key="index" class="relative inline-block text-left">
                  <div>
                    <button @mouseenter="openDropdown(dropdown.id)" @mouseleave="closeDropdown" type="button" class="inline-flex justify-center w-full px-4 py-2 uppercase font-medium text-xs text-secondary" :id="dropdown.id" aria-haspopup="true" :aria-expanded="dropdown.open">
                      {{ dropdown.name }}
                    </button>
                  </div>
                  <transition name="fade">
                    <div v-show="dropdown.open" @mouseenter="openDropdown(dropdown.id)" @mouseleave="closeDropdown" class="origin-top-left -left-10 absolute mt-2 w-44 rounded-xs shadow-sm bg-white py-4 ">
                      <div class="py-1" role="menu" aria-orientation="vertical" :aria-labelledby="dropdown.id">
                        <a v-for="(option, index) in dropdown.options" :key="index" href="#" @click="selectOption(option)" class="block px-6 py-2 font-normal text-xs text-secondary hover:underline underline-offset-4 hover:font-bold" role="menuitem">{{ option }}</a>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          <!-- Search Icon -->
          <div class="px-4 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8686 17.1225C20.0859 17.3271 20.3032 17.519 20.5077 17.7363C21.1085 18.3118 21.6966 18.9128 22.2718 19.501C22.3094 19.5431 22.3587 19.5729 22.4134 19.5866C22.4681 19.6003 22.5257 19.5972 22.5786 19.5777C22.8647 19.4797 23.1728 19.4649 23.4669 19.5351C23.7611 19.6053 24.0293 19.7575 24.2405 19.9741C26.6565 22.3909 29.0853 24.8078 31.5014 27.2374C31.6591 27.39 31.7845 27.5728 31.8702 27.7749C31.9559 27.977 32 28.1943 32 28.4138C32 28.6333 31.9559 28.8506 31.8702 29.0527C31.7845 29.2548 31.6591 29.4376 31.5014 29.5902C30.875 30.2296 30.223 30.869 29.5967 31.4955C29.445 31.6549 29.2626 31.7819 29.0604 31.8686C28.8582 31.9553 28.6406 32 28.4206 32C28.2006 32 27.983 31.9553 27.7808 31.8686C27.5786 31.7819 27.3962 31.6549 27.2445 31.4955L19.9964 24.2323C19.7825 24.0273 19.6298 23.7669 19.5553 23.4801C19.4808 23.1934 19.4875 22.8915 19.5745 22.6083C19.6073 22.5262 19.6073 22.4347 19.5745 22.3526C18.7692 21.5342 17.9511 20.7286 17.1329 19.9102C15.7717 20.8433 14.2163 21.4548 12.5842 21.6984C10.9521 21.9421 9.28593 21.8116 7.71163 21.3168C5.26382 20.602 3.1599 19.0201 1.79295 16.8668C0.390535 14.7364 -0.219156 12.1809 0.0703629 9.64655C0.359881 7.11222 1.53021 4.76018 3.37695 3.00118C5.22369 1.24219 7.62947 0.188043 10.1741 0.0228538C12.7188 -0.142336 15.2406 0.591928 17.2991 2.09741C18.4478 2.91312 19.4225 3.94946 20.1666 5.14599C20.9106 6.34252 21.409 7.67528 21.6327 9.06652C22.1297 11.8795 21.4956 14.775 19.8686 17.1225ZM10.9202 17.6596C12.2546 17.6596 13.5591 17.264 14.6688 16.5226C15.7785 15.7813 16.6436 14.7276 17.1548 13.4946C17.6661 12.2616 17.8005 10.9048 17.5411 9.5954C17.2817 8.28604 16.6401 7.08298 15.6974 6.13822C14.7548 5.19347 13.5533 4.54943 12.2448 4.28747C10.9364 4.02551 9.57968 4.15739 8.34613 4.66645C7.11258 5.17551 6.05756 6.03891 5.31437 7.14754C4.57118 8.25617 4.17318 9.56029 4.17065 10.8951C4.16728 11.7833 4.33947 12.6634 4.67732 13.4848C5.01516 14.3062 5.512 15.0527 6.13926 15.6813C6.76653 16.31 7.51183 16.8084 8.33233 17.1479C9.15283 17.4874 10.0323 17.6613 10.9202 17.6596Z" fill="#333333"/>
            </svg>
          </div>
          <!-- Menú de hamburguesa -->
          <div class="-mr-2 flex md:hidden">
            <button @click="openMobileMenu = !openMobileMenu" class="inline-flex items-center justify-center rounded-md cursor-pointer pt-3">
                <svg width="53" height="43" viewBox="0 0 53 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11" y="13" width="32" height="2.66667" fill="black"/>
                        <rect x="11" y="27.6666" width="32" height="2.66667" fill="black"/>
                        <rect x="11" y="42.3334" width="32" height="2.66667" fill="black"/>
                </svg>
            </button>
          </div>
          <div>

        </div>
        </div>
  
        <!-- Menus desplegables dentro del menú de hamburguesa -->
        <div v-show="openMobileMenu" class="md:hidden">
          <div class="pt-4 pb-3">
            <div class="mt-3 px-2 space-y-1">
              <div v-for="(dropdown, index) in dropdowns" :key="index" class="relative inline-block text-left w-full">
                <div>
                  <button @click="toggleDropdown(dropdown.id)" type="button" class="w-full text-left inline-flex justify-between items-center px-4 py-2 font-medium text-xs text-secondary uppercase" :id="dropdown.id" aria-haspopup="true" :aria-expanded="dropdown.open">
                    {{ dropdown.name }}
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                  <div v-show="dropdown.open"  class="w-full origin-top-right mt-2">
                    <div class="py-1" role="menu" aria-orientation="vertical" :aria-labelledby="dropdown.id">
                      <a v-for="(option, index) in dropdown.options" :key="index" href="#" @click="selectOption(option)" class="block px-4 py-2 font-normal text-xs text-secondary hover:underline underline-offset-4 hover:font-bold" role="menuitem">{{ option }}</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dropdowns: [
          {
            id: 'dropdown1',
            name: 'New',
            open: false,
            options: ['New Vehicle Inventory', '2023 Ford Lightning', '2023 Ford Bronco', 'New Vehicle Specials']
          },
          {
            id: 'dropdown2',
            name: 'Used',
            open: false,
            options: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']
          },
          {
            id: 'dropdown3',
            name: 'Service',
            open: false,
            options: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']
          },
          {
            id: 'dropdown4',
            name: 'Parts',
            open: false,
            options: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']
          },
          {
            id: 'dropdown5',
            name: 'About',
            open: false,
            options: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']
          },
        ],
        openMobileMenu: false,
        selectedOption: null
      }
    },
    methods: {
      toggleDropdown(id) {
        this.dropdowns = this.dropdowns.map(dropdown => {
          if (dropdown.id === id) {
            dropdown.open = !dropdown.open;
          } else {
              dropdown.open = false;
          }
          return dropdown;
        });
      },
      selectOption(option) {
        this.selectedOption = option;
        this.dropdowns = this.dropdowns.map(dropdown => {
          dropdown.open = false;
          return dropdown;
        });
      },
      openDropdown(id) {
      this.dropdowns = this.dropdowns.map(dropdown => {
        if (dropdown.id === id) {
          dropdown.open = true;
        }
        return dropdown;
      });
    },
    closeDropdown() {
      this.dropdowns = this.dropdowns.map(dropdown => {
        dropdown.open = false;
        return dropdown;
      });
    },
    }
  }
  </script>
  
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>
  