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
    <div class="main-open d-flex flex-column justify-content-between align-self-center p-2">
        <div class="trip-info open">
            <div>
                <img class="icon open" src="public/svg/home.svg" alt="home">
                <h5>Experiencia Selina</h5>
                <p>Sumate a #SelinaSnowExperience en el Hotel Selina con 
                vista al lado Nahuel Huapi en la ciudad de Bariloche. </p>
            </div>
            <p class="includes-title mt-3 mb-2"><span><b>Incluye</b></span></p>
        </div>
        <div class="content-open bottom d-flex flex-column justify-content-between">
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/house.svg">
                    <p> <b>Alojamiento</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <p> <b>Desayuno,
                    Almuerzo</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/skis.svg">
                    <p> <b>Equipos</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/ticket.svg">
                    <p> <b>Pases</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <p> <b>Traslado al cerro</b> <br> <i>Ida & vuelta</i> </p>
                </div>
            </div>
            <div class="icon-row d-flex justify-content-between">
                <div class="price-box">
                    <h3><b>$x</b></h3>
                    <p> Ski Week </p>
                </div>
                <div class="price-box">
                    <h3><b>$x</b></h3>
                    <p> 3 ski days </p>
                </div>
                <div class="price-box">
                    <h3><b>$x</b></h3>
                    <p> Ski day </p>
                </div>
            </div>
        </div>
    </div>
    `
    selina.addEventListener('mouseenter', (event) => {
        selina.innerHTML = selinaOpenMarkup
    })
    selina.addEventListener('mouseleave', (event) => {
        selina.innerHTML = selinaClosedMarkup
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
    <div class="main-open d-flex flex-column justify-content-between align-self-center  p-2">
        <div class="trip-info open">
            <div>
                <img class="icon open" src="public/svg/skis.svg" alt="skis">
                <h5>Ski Trips</h5>
                <p>Una semana a puro ski en el Cerro Catedral, Bariloche</p>
            </div>
            <p class="includes-title mt-3 mb-2"><span><b>Incluye</b></span></p>
        </div>
        <div class="content-open d-flex flex-column justify-content-between">
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/house.svg">
                    <p> <b>7 noches</b> en 
                    la finca en el cerro </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <p> Desayuno,
                    Almuerzo & Cena </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <p> <b>Transfer al aeropuerto</b>
                    Ida & vuelta </p>
                </div>
            </div>
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/bonfire.svg">
                    <p> <b>Equipos</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/ticket.svg">
                    <p> <b>Pases</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/electric-guitar.svg">
                    <p> <b>Música en vivo</b></p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/beer.svg">
                    <p> <b>After ski</b></p>
                </div>
            </div>
            <p class="text-center mt-2"><b>*Consultar por aéreos, clases de ski y snowboard</b></p>
        </div>
    </div>
    `
    skiTrips.onmouseenter = () => skiTrips.innerHTML = skiTripsOpenMarkup
        
    skiTrips.onmouseleave = () => skiTrips.innerHTML = skiTripsClosedMarkup
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
    <div class="main-open d-flex flex-column justify-content-between align-self-center p-2">
        <div class="trip-info surf-house open">
            <div>
                <img class="icon open" src="public/svg/home.svg" alt="home">
                <h5>Swell Surf House</h5>
                <p>Ubicada en Chapadmalal, a 150 mts de la playa Siempre Verde.</p>
            </div>
            <div class="content-open d-flex flex-column justify-content-between">
                <div class="icon-row d-flex justify-content-between">
                    <div class="item">
                        <img class="icon open" src="public/svg/bed.svg">
                        <p> <b>Habitaciones:</b> <br> En suite & compartidas </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/coffee-cup.svg">
                        <p> <b>Desayuno</b> </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/skateboard.svg">
                        <p> <b>Skate Ramp</b> </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/wifi.svg">
                        <p> <b>WiFi</b> </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/chef.svg">
                        <p> <b>Cocina</b> </p>
                    </div>
                </div>
                <div class="icon-row d-flex justify-content-between">
                    <div class="item">
                        <img class="icon open" src="public/svg/tenedor.svg">
                        <p> <b>Parrilla</b> </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/tree.svg">
                        <p> <b>Jardín</b> </p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/electric-guitar.svg">
                        <p> <b>Música en vivo</b></p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/verduras.svg">
                        <p> <b>Huerta</b></p>
                    </div>
                    <div class="item">
                        <img class="icon open" src="public/svg/bonfire.svg">
                        <p> <b>Fogoneros</b> </p>
                    </div>
                </div>
            </div>
            <p class="includes-title mt-4 mb-2"><span><b>Alquilamos trajes y tablas!</b></span></p>
        </div>
        <div class="price-boxes-row">
            <div class="price-box">
                <h3><b>$1500</b></h3>
                <p> por noche
                Domingos a Jueves </p>
            </div>
            <div class="price-box">
                <h3><b>$2500</b></h3>
                <p> por noche
                Viernes y Sábados </p>
            </div>
            <div class="price-box">
                <h3><b>$7000</b></h3>
                <p> por semana </p>
            </div>
            <div class="price-box">
                <h3><b>$2000</b></h3>
                <p> Clases de surf </p>
            </div>
        </div>
        <p class="text-center mt-2 extra"><b>*Consultar por clases opcionales de yoga</b></p>
    </div>
    `
    surfHouse.addEventListener('mouseenter', (event) => {
        surfHouse.innerHTML = surfHouseOpenMarkup
    })
    surfHouse.addEventListener('mouseleave', (event) => {
        surfHouse.innerHTML = surfHouseClosedMarkup
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
    <div class="d-flex flex-column justify-content-between align-self-center h-100  p-2">
        <div class="trip-info open">
            <div>
                <img class="icon open" src="public/svg/surfboard.svg" alt="skis">
                <h5>Surf Trips</h5>
                <p>¡Escapate al mar!</p>
            </div>
            <p class="includes-title mt-3 mb-2"><span><b>Incluye</b></span></p>
        </div>
        <div class="content-open d-flex flex-column justify-content-between">
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/home.svg">
                    <p> 3 noches en <b>Swell Surf House</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/chef.svg">
                    <p> Desayuno,
                    Almuerzo & Cena </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/surfboard.svg">
                    <p> 3 clases
                    de surf y yoga </p>
                </div>
            </div>
            <div class="icon-row d-flex justify-content-between">
                <div class="item">
                    <img class="icon open" src="public/svg/bonfire.svg">
                    <p> Fogón </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/electric-guitar.svg">
                    <p> <b>Música 
                    en vivo</b> </p>
                </div>
                <div class="item">
                    <img class="icon open" src="public/svg/van.svg">
                    <p> <b>Traslado 
                    en carpool</b></p>
                </div>
            </div>
        </div>
    </div>
    
    
    `
    surfTrips.onmouseenter = () => surfTrips.innerHTML = surfTripsOpenMarkup
        
    surfTrips.onmouseleave = () => surfTrips.innerHTML = surfTripsClosedMarkup
}


const selinaOpen = `
    <div>
`

//Carousel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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
}

//Slides automáticos

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}
