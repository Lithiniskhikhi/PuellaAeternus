<template>
    <div class="admin" >
        <br>
        <br>
        <div  >
            <form action="https://formspree.io/f/meqbglnp" method="POST" >
                <h1 style="padding-top: 95px;">CONTACT US</h1>
                <br>
                <div class="mb-3" >
                  <label for="exampleInputEmail1" class="form-label"><h3>Email address:</h3></label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="p-4 w-75 text-center border-5 rounded-4 fs-5 border-radius:2px solid black;"
                  placeholder="Enter Email"
                  name="emailAdd"
                  minlength="3"
                  maxlength="20"
                  required
                  oninvalid="this.setCustomValidity('Please enter your Email Address')"
                  oninput="this.setCustomValidity('')">
                  <div id="emailHelp" class="form-text"><h5></h5></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"> <h3>Username:</h3></label>
                  <input type="username" class="form-control" id="exampleInputUsername" style="p-4 w-75 text-center border-5 rounded-4 fs-5"
                  placeholder="Enter username"
                  name="name"
                  minlength="3"
                  maxlength="20"
                  required
                  oninvalid="this.setCustomValidity('Please enter your Username')"
                  oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3" style="p-4 w-75 text-center border-5 rounded-4 fs-5;">
                         <textarea class="form-control w-100"  rows="9" id="message" placeholder="reason of interest" name="message" value="" required></textarea>
                </div>
                <button type="submit" class="btn " style="background-color: rgb(37, 37, 139); color: white">Submit</button>
              </form>
          </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
 .admin {
    /* The image used */
    background-image: url("https://i.postimg.cc/2jsWFp6x/adrianna-geo-1r-Bg5-YSi00c-unsplash.jpg");
  height: 42rem;
   color: white; 
  }

  h3{
    color: rgb(246, 242, 242); 
    font-family: 'Phudu', cursive;

  }
  
  h1{
    margin: 0;
    margin-left: 20px ;
    font-family: 'Phudu', cursive;
  color: rgb(251, 249, 249);
  }
</style>
    