const selina = document.getElementById('selina')
const skiTrips = document.getElementById('ski-trips')
const surfTrips = document.getElementById('surf-trips')
const surfHouse = document.getElementById('surf-house')


if(selina) {
    const selinaClosedMarkup = `
    <div class="cross-container">
        <a href="#" class="cross cross2"></a>
    </div>
    <div class="trip-info bottom">
        <img class="icon" src="public/svg/home.svg" alt="home">
        <h3>Experiencia Selina</h3>
    </div>
    `
    const selinaOpenMarkup = `
    <div class="cross-box">
        <a href="#" class="cross open"></a>
    </div>
    <div class="main-open d-flex justify-content-between flex-column align-self-center">
        <div class="trip-info open">
            <div class="trip-header">
                <img class="icon open" src="public/svg/home.svg" alt="home">
                <h5>Experiencia Selina</h5>
                <p>Sumate a #SelinaSnowExperience en el Hotel Selina con 
                vista al lago Nahuel Huapi en la ciudad de Bariloche. </p>
            </div>
            
        </div>
        <p class="includes-title"><span><b>Incluye</b></span></p>
        <div class="content-open bottom d-flex flex-column justify-content-between">
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/house.svg">
                    <span> <b>Alojamiento</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <span> <b>Desayuno,
                    Almuerzo</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/skis.svg">
                    <span> <b>Equipos</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/ticket.svg">
                    <span> <b>Pases</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <span> <b>Traslado al cerro</b> <br> <i>Ida & vuelta</i> </span>
                </div>
            </div>
            
        </div>
        <div class="row justify-content-around">
                <div class="price-box col">
                    <h3>Desde:</h3>
                    <h3><b>$95.000</b></h3>
                    <span> 7 noches / 7 días de Ski </span>
                </div>
                <div class="price-box col">
                    <h3>Desde:</h3>
                    <h3><b>$46.500</b></h3>
                    <span> 3 noches / 3 días de Ski </span>
                </div>
            </div>
    </div>
    `
    

    selina.onclick = () => {
        selina.classList.toggle("open") 
        if(selina.classList.contains("open")) {
            selina.innerHTML = selinaOpenMarkup
        } else {
            selina.innerHTML = selinaClosedMarkup
        }
        
    }
    
    document.addEventListener('mouseup', (e) => {
        if(!selina.contains(e.target)) {
            selina.classList.remove("open")
            selina.innerHTML = selinaClosedMarkup
        }
    })
}

if(skiTrips) {
    
    const skiTripsClosedMarkup = `
    <div class="trip-info">
        <img class="icon" src="public/svg/skis.svg" alt="skis">
        <h3>Ski Trips</h3>
    </div>
    <div class="cross-container">
        <a href="#" class="cross cross1"></a>
    </div>
    `

    const skiTripsOpenMarkup = `
    <div class="cross-box">
        <a href="#" class="cross open"></a>
    </div>
    <div class="main-open d-flex justify-content-between flex-column align-self-center  p-2">
        <div class="trip-info open">
            <div class="trip-header">
                <img class="icon open" src="public/svg/skis.svg" alt="skis">
                <h5>Ski Trips</h5>
                <p>Una semana a puro ski en el Cerro Catedral, Bariloche</p>
            </div>
            
        </div>
        <p class="includes-title"><span><b>Incluye</b></span></p>
        <div class="content-open d-flex flex-column justify-content-between">
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/house.svg">
                    <span> <b>7 noches</b> en 
                    la finca en el cerro </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <span> Desayuno,
                    Almuerzo & Cena </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <span> <b>Transfer al aeropuerto</b>
                    Ida & vuelta </span>
                </div>
            </div>
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/bonfire.svg">
                    <span> <b>Equipos</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/ticket.svg">
                    <span> <b>Pases</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/electric-guitar.svg">
                    <span> <b>Música en vivo</b></span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/beer.svg">
                    <span> <b>After ski</b></span>
                </div>
            </div>
           
            
        </div>
        <div class="fechas">
            <h5 class="text-center"><b>Precio:</b> $125.000</h5>
            <p class="text-center mt-2 extra"><b>*Consultar por aéreos, clases de ski y snowboard</b></p>
        </div>
    </div>
    `


    skiTrips.onclick = () => {
        skiTrips.classList.toggle("open") 
        if(skiTrips.classList.contains("open")) {
            skiTrips.innerHTML = skiTripsOpenMarkup
        } else {
            skiTrips.innerHTML = skiTripsClosedMarkup
        }
        
    }
    
    document.addEventListener('mouseup', (e) => {
        if(!skiTrips.contains(e.target)) {
            skiTrips.classList.remove("open")
            skiTrips.innerHTML = skiTripsClosedMarkup
        }
    })
}

if(surfHouse) {
    const surfHouseClosedMarkup = `
    <div class="cross-container">
        <a href="#" class="cross cross2"></a>
    </div>
    <div class="trip-info bottom">
        <img class="icon" src="public/svg/home.svg" alt="home">
        <h3>Swell Surf House</h3>
    </div>
    `

    const surfHouseOpenMarkup = `
    <div class="cross-box">
        <a href="#" class="cross open"></a>
    </div>
    <div class="main-open d-flex flex-column justify-content-around align-self-center">
        <div class="trip-info surf-house open">
            <div class="trip-header">
                <img class="icon open" src="public/svg/home.svg" alt="home">
                <h5>Swell Surf House</h5>
                <p>Ubicada en Chapadmalal, a 300 mts del mar.</p>
            </div>
            <div class="content-open d-flex flex-column justify-content-between">
                <div class="icon-row d-flex justify-content-between">
                    <div class="item">
                        <img class="icon open swell" src="public/svg/bed.svg">
                        <span> <b>Habitaciones:</b> En suite & compartidas </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/coffee-cup.svg">
                        <span> <b>Desayuno</b> </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/swimming-pool.svg">
                        <span> <b>Pileta</b> </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/wifi.svg">
                        <span> <b>WiFi</b> </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/chef.svg">
                        <span> <b>Cocina</b> </span>
                    </div>
                </div>
                <div class="icon-row d-flex justify-content-between">
                    <div class="item">
                        <img class="icon open swell" src="public/svg/tenedor.svg">
                        <span> <b>Parrilla</b> </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/coworking.svg">
                        <span> <b>Co-Working</b> </span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/electric-guitar.svg">
                        <span> <b>Música en vivo</b></span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/verduras.svg">
                        <span> <b>Huerta</b></span>
                    </div>
                    <div class="item">
                        <img class="icon open swell" src="public/svg/bonfire.svg">
                        <span> <b>Fogoneros</b> </span>
                    </div>
                </div>
            </div>
            
        </div>
        <p class="includes-title surf-house"><span><b>¡Alquilamos trajes y tablas!</b></span></p>
        <div class="price-boxes-row row">
            <div class="price-box col">
                <h3><b>$3500</b></h3>
                <span> por noche en habitación compartida c/ desayuno </span>
            </div>
            <div class="price-box col">
                <h3><b>$21.000</b></h3>
                <span> por semana en habitación compartida c/ desayuno</span>
            </div>
            <div class="price-box col">
                <h3><b>$2000</b></h3>
                <span> Clases de surf </span>
            </div>
            <div class="price-box col">
                <h3><b>$600</b></h3>
                <span> Clase de yoga </span>
            </div>
            
        </div>
    </div>
    `
    surfHouse.onclick = () => {
        surfHouse.classList.toggle("open") 
        if(surfHouse.classList.contains("open")) {
            surfHouse.innerHTML = surfHouseOpenMarkup
        } else {
            surfHouse.innerHTML = surfHouseClosedMarkup
        }
        
    }
    
    document.addEventListener('mouseup', (e) => {
        if(!surfHouse.contains(e.target)) {
            surfHouse.classList.remove("open")
            surfHouse.innerHTML = surfHouseClosedMarkup
        }
    })
}

if(surfTrips) {
    const surfTripsClosedMarkup = `
    <div class="trip-info">
        <img class="icon" src="public/svg/surfboard.svg" alt="skis">
        <h3>Surf Trips</h3>
    </div>
    <div class="cross-container">
        <a href="#" class="cross cross1"></a>
    </div>
    `
    const surfTripsOpenMarkup = `
    <div class="cross-box">
        <a href="#" class="cross open"></a>
    </div>
    <div class="container d-flex flex-column justify-content-between align-self-center justify-self-center h-100  p-2">
        <div class="trip-info open">
            <div class="trip-header">
                <img class="icon open" src="public/svg/surfboard.svg" alt="skis">
                <h5>Surf Trips</h5>
                <p>¡Escapate al mar!</p>
            </div>
            
        </div>
        <p class="includes-title"><span><b>Incluye</b></span></p>
        <div class="content-open d-flex flex-column justify-content-center">
            <div class="icon-row d-flex justify-content-center">
                <div class="item">
                    <img class="icon open" src="public/svg/home.svg">
                    <span> 3 o 4 noches en <b>Swell Surf House</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <span> Desayuno,
                    Almuerzo & Cena.</span>
                    <span><b>Experiencia Gourmet</b></span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/surfboard.svg">
                    <span> 3 clases
                    de surf y yoga </span>
                </div>
            </div>
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/bonfire.svg">
                    <span> Fogón </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/electric-guitar.svg">
                    <span> <b>Música 
                    en vivo</b> </span>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <span> <b>Traslado 
                    en carpool</b></span>
                </div>
            </div>
        </div>
        <div class="fechas text-center">
            <h5><b>Próximos trips:</b> 18/11 al 22/11 y 8/12 al 12/12</h5>
            <h5><b>Precio:</b> $47.000 - $55.000</h5>
        </div>
    </div>
    
    
    `
    surfTrips.onclick = () => {
        surfTrips.classList.toggle("open") 
        if(surfTrips.classList.contains("open")) {
            surfTrips.innerHTML = surfTripsOpenMarkup
        } else {
            surfTrips.innerHTML = surfTripsClosedMarkup
        }
        
    }
    
    document.addEventListener('mouseup', (e) => {
        if(!surfTrips.contains(e.target)) {
            surfTrips.classList.remove("open")
            surfTrips.innerHTML = surfTripsClosedMarkup
        }
    })
}

//Carousel

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
/* function plusSlides(n) {
  showSlides(slideIndex += n);
} */

// Thumbnail image controls
/* function currentSlide(n) {
  showSlides(slideIndex = n);
} */

/* function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */

//Slides automáticos

//var slideIndex = 0;
//showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  //console.log(slideIndex)
 // console.log(slides.length)
  
}
setInterval(showSlides, 5000); // Change image every 5 seconds
