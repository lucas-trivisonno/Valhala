import React from "react";
import images from "./images/conjunto-over.jpg";
import imagen from "./images/conjunto-overii.jpg";
import image from "./images/conjunto-overiii.jpg";
import logo from "./images/logo.jpg"
const Main = () => {
return(
    <div className="container-fluid">
      
      <div id="carouselExample" className="carousel slide carousel ">
    <div className="carousel-inner ">
      <div className="carousel-item active">
        <img src={images} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={imagen} class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner pt-5">
    <div class="carousel-item active">
      <img src={imagen} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={images} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner pt-5">
    <div class="carousel-item active">
      <img src={imagen} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={images} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <img className="logo" src={logo} alt="" />
</div>

  
  
)
}


export default Main;