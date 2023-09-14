<template>
    <div class="">
        <div class="container-fluid "  >
            <nav class="navbar navbar-expand-lg  bg-white  ">
                <img src="https://i.postimg.cc/prJ28wMQ/Screenshot-2023-08-30-153457.png" style="width: 3.5rem; margin-right: 15rem">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <header id="header">
        <ul class="navbar-nav" mx-auto p-2 >
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/" style="color:white">Home</router-link>
          </li> -->
          <div class="dropdown-trigger">
            <li class="nav-item">
                <router-link class="nav-link" to="/" style="color:#000"></router-link>
              </li>
          </div>
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color:#000">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" style="color:#000">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Products" style="color:#000">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin" style="color:#000">ADMIN</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/contact" style="color:#000">CONTACT</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/register" style="color:#000">register</router-link>
          </li>
         
          <li class="nav-item">
            <router-link class="nav-link" to="/login" style="color:#000"><i class="bi bi-person"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart" style="color:#000"><i class="bi bi-cart"></i></router-link>
          </li>
          <!-- <li class="nav-item" >
            <router-link class="nav-link" to="/checkout" style="color:#000">Checkout</router-link>
          </li> -->
          <li class="nav-item" >
            <router-link class="nav-link" to="/user" style="color:#000">User</router-link>
          </li>
          <!-- <i class="bi bi-cart"></i> -->
          <!-- <i class="bi bi-bag" style="margin-right:2rem"></i> -->
          <form class="d-flex" role="search">
            <!-- <i class="bi bi-search"   style="margin-right:2rem"></i> -->
            <!-- <i class="bi bi-heart" style="margin-right:2rem"></i>
            <i class="bi bi-person"></i> -->
        </form>
         
        </ul>
    </header>
      </div>
    </nav>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.bi {
    font-size: 2rem;
  }
.nav-link{
    font-family: Poppins,sans-serif
  }
  #header ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #header ul li {
    list-style: none;
    margin-left: 55px;
    font-size: 13px;
    display: block;
  padding: 11px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  color: #000;
  }

  

  a {
    background-image: linear-gradient(
      to right,
      #54b3d6,
      #54b3d6 50%,
      #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  
  a:before{
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  a:hover {
   background-position: 0;
  }
  
  a:hover::before{
    width: 100%;
  }
  
  /* Presentational Styles */
  body {
      display: grid;
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
    font-weight: 700;
    height: 100vh;
      place-items: center;
  }
</style>
