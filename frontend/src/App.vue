<template>
 <div>
  <Navbar/>
  <router-view/>
  <Footer/>

 </div>
 
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import carousel from '@/components/carousel.vue'


export default{
   components:{
     Navbar,
     Footer,
     carousel
   }
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:black;
}

nav a.router-link-exact-active {
  color:black;
}
</style>
