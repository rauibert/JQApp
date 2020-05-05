'use strict';

window.addEventListener('load', function(){

    //Variables
    var search_results = document.querySelector('#search_results');

    //Load JSON
    this.fetch('db/films.json')
        .then(data => data.json())
        .then(films =>{
            console.log(films);
            var filmsData = films.film;
            

            for(var film in filmsData){
                
                search_results.innerHTML +='<p class= "film_box"> Name: '+ filmsData[film].name + '<br>' +
                    'Year: '+ filmsData[film].year + '<br>' +
                    'Director: '+ filmsData[film].director + '<br>' +
                    'Screenwriter: '+ filmsData[film].screenwriter + '<br>' +
                    'Story by: '+ filmsData[film].stroyby + '</p>';
                    
            }

            var film_box = document.querySelectorAll(".film_box");

            for(var i = 0; i<film_box.length; i++){
            
                film_box[i].addEventListener("mouseenter", function(){
                    this.style.background = "black";
                    this.style.color = "white";
                });
        
                film_box[i].addEventListener("mouseleave", function(){
                    this.style.background = "rgb(152, 188, 243)";
                    this.style.color = "black";
                }); 
            };   
        });
});

