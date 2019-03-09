// Sticky Menu Baackground
window.addEventListener("scroll", function(){
    if (window.scrollY > 150){
        document.querySelector("#navbar").style.opacity = 0.9
    }
    else{
        document.querySelector("#navbar").style.opacity = 1
    }
})

// Navbar buttons smooth scroll

$("nav a").on("click", function(event){
    if (this.hash !=''){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Map
// function initMap(){
//     const loc={ lat: 42.361145, lng: -71.057083}
//     const map= new google.maps.Map(document.querySelector("#map"),{
//         zoom: 14, 
//         center:loc});
//     const marker =new google.maps.Marker({ position: loc, map:
//      map})
// }

// nav js
// $("nav li").on("click", function(){
//     $("#navbar").fadeToggle("10000000")
// })