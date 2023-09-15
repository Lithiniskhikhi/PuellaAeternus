<template>
    <div> <br><br><br>
        <h1>REVIEWS</h1>
        <div class="container-lg">
            <div class="row">
                <div class="col-sm-12">			
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                        <h2>Customer <b>Testimonials</b></h2>
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>   
                        <!-- Wrapper for carousel items -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="testimonial">
                                            <p>This painting is a conversation starter; everyone who visits compliments its beauty and craftsmanship.</p>
                                        </div>
                                        <div class="media">
                                            <img src="	https://i.pinimg.com/564x/3d/ce/d3/3dced3c5eefb167c86b6265a953cb136.jpg" class="mr-3" alt="">
                                            <div class="media-body">
                                                <div class="overview">
                                                    <div class="name"><b>Rabia Haucha</b></div>
                                                    <div class="details">Media Analyst / SkyNet</div>
                                                    <div class="star-rating">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>										
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="testimonial">
                                            <p>I absolutely love the painting I purchased; its vibrant colors and intricate details bring life to my living room.</p>
                                        </div>
                                        <div class="media">
                                            <img src="https://i.pinimg.com/564x/48/14/63/481463e84468592e96493ebbb7ef7d9b.jpg" class="mr-3" alt="">
                                            <div class="media-body">
                                                <div class="overview">
                                                    <div class="name"><b>Lithini Skhikhi</b></div>
                                                    <div class="details">Web Developer / SoftBee</div>
                                                    <div class="star-rating">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>										
                                            </div>
                                        </div>
                                    </div>
                                </div>			
                            </div>
                           
                   
                        </div>

                    </div>
                </div>
            </div>
        </div>
 
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Phudu:wght@300&family=Vina+Sans&display=swap");

/*
body{
    background-color:#eee;
}

.card{
    
    border:none;
}

.user-content p{
    margin-top:5px;
    font-size:12px;
}


.ratings i{
    color:blue;
}*/

h1 {
    margin: 0;
    margin-left: 20px;
    font-family: "Phudu", cursive;
    color: black;
  }
body {
	font-family: "Open Sans", sans-serif;
}
h2 {
    font-family: "Phudu", cursive;

	color: #000;
	font-size: 26px;
	font-weight: 300;
	position: relative;
	margin: 0 0 50px 0;
	text-transform: uppercase;
	display: inline-block;
}
h2::after {
	content: "";
	width: 50%;
	position: absolute;
	height: 4px;
	border-radius: 1px;
	background: #ff5555;
	left: 0;
	bottom: -20px;
}
.carousel {
	margin: 50px auto;
}
.carousel .carousel-item {
	color: #999;
	overflow: hidden;
    min-height: 120px;
	font-size: 13px;
}
.carousel .media {
	position: relative;
	padding: 0 0 0 20px;
	margin-left: 20px;
}
.carousel .media img {
	width: 75px;
	height: 75px;
	display: block;
	border-radius: 50%;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 2px solid #fff;
}
.carousel .testimonial {
    color: #fff;
    position: relative;    
    background: #9b9b9b;
	padding: 15px;
	margin: 0 0 20px 20px;
}
.carousel .testimonial::before, .carousel .testimonial::after {
	content: "";
	display: inline-block;
	position: absolute;
	left: 0;
	bottom: -20px;
}
.carousel .testimonial::before {
    width: 20px;
    height: 20px;
	background: #9b9b9b;
	box-shadow: inset 12px 0 13px rgba(0,0,0,0.5);
}
.carousel .testimonial::after {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
}
.carousel .carousel-item .row > div:first-child .testimonial {
	margin: 0 20px 20px 0;
}
.carousel .carousel-item .row > div:first-child .media {
	margin-left: 0;
}
.carousel .testimonial p {
	text-indent: 40px;
    line-height: 21px;
	margin: 0;
}
.carousel .testimonial p::before {
	content: "\201D";
  	font-family: Arial,sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 68px;
    line-height: 70px;
    position: absolute;
    left: -25px;
    top: 0;
}
.carousel .overview {
	padding: 3px 0 0 15px;
}
.carousel .overview .details {
	padding: 5px 0 8px;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #ff5555;
}
.carousel-control-prev, .carousel-control-next {
	width: 30px;
	height: 30px;
    background: #666;
    text-shadow: none;
	top: 4px;
}
.carousel-control-prev i, .carousel-control-next i {
	font-size: 16px;
}
.carousel-control-prev {
	left: auto;
	right: 40px;
}
.carousel-control-next {
	left: auto;
}
.carousel-indicators {
	bottom: -80px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 17px;
    height: 17px;
	border-radius: 0;
	margin: 1px 5px;
  	box-sizing: border-box;
}
.carousel-indicators li {	
    background: #e2e2e2;
    border: 4px solid #fff;
}
.carousel-indicators li.active {
	color: #fff;
    background: #ff5555;
    border: 5px double;    
}
.star-rating li {
	padding: 0 2px;
}
.star-rating i {
	font-size: 14px;
	color: #ffdc12;}
</style>