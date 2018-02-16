$(document).ready(function() {
        $("#movieSubmit").click(function(e) {
                e.preventDefault();
		console.log("Roulette Begun!\n");

		var movie = Math.floor(Math.random() * 1000) + 2;
                var myurl="https://api.themoviedb.org/3/movie/" + movie + "?api_key=c59173680a889c0419dae6d8320bd867";
                $.ajax({
                        url : myurl,
                        dataType : "json",
                        success : function(json) {
                                console.log(json);

				var results = "";
				results += '<img src="https://image.tmdb.org/t/p/w154' + json.poster_path + '"/>';
				results += '<h3>' + json.title + '</h3>';
				results += '<p>' + json.tagline + '</p>';

				//Genres
				results += '<p>Genre(s): ';
				for (var i = 0; i < json.genres.length; i++) {
					if (i === 0) {
						results += json.genres[i].name;
					} else {
						results += ', ' + json.genres[i].name;
					}
				}
				results += '</p>';


				$("#results").html(results);
                        }
                });
        });
});
