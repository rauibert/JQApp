
$(document).ready(function(){
    
    //Variables
    var search_results = $("#search_results");


    //Load JSON
    var getJSON = $.getJSON("db/films.json", function(data){ 
        
        console.log(data);

        var films = data.film;

        for(var film in films){
            search_results.append(
                "<p class= 'film_box'> Name: "+ films[film].name + "</p>" +
                "<p class= 'film_box'> Year: "+ films[film].year + "</p>" +
                "<p class= 'film_box'> Director: "+ films[film].director + "</p>" +
                "<p class= 'film_box'> Screenwriter: "+ films[film].screenwriter + "</p>" +
                "<p class= 'film_box'> Story by: "+ films[film].stroyby + "</p>" 
                );
        }

    });


});