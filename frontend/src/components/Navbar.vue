<template>
    <div>
        <div class="container-fluid" position-fixed>
            <nav class="navbar navbar-expand-lg  bg-white ">
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
          <li class="nav-item" style="margin-right:10rem">
            <router-link class="nav-link" to="/contact" style="color:#000">CONTACT</router-link>
          </li>
          <i class="bi bi-bag" style="margin-right:2rem"></i>
          <form class="d-flex" role="search">
            <i class="bi bi-search"   style="margin-right:2rem"></i>
            <i class="bi bi-heart"></i>
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

  
</style>
