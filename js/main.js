
$(document).ready(function(){
    
    //Variables
    var search_results = $("#search_results");


    //Load JSON
    var getJSON = $.getJSON("db/films.json", function(data){ 
        
        var films = data.film;

        for(var film in films){
            search_results.append(
                "<p class= 'film_box'> Name: "+ films[film].name + "<br>" +
                "Year: "+ films[film].year + "<br>" +
                "Director: "+ films[film].director + "<br>" +
                "Screenwriter: "+ films[film].screenwriter + "<br>" +
                "Story by: "+ films[film].stroyby + "</p>" 
                );
        }

        $(".film_box").on("mouseenter", function(){
            $(this).css("background","rgb(4, 109, 122)")
                .css("color", "white");
        });

        $(".film_box").on("mouseleave", function(){
            $(this).css("background","#7bb3bb")
                .css("color", "black");
        });
    

    });

    

});