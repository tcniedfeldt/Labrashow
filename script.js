$(document).ready(function() {
        $("#movieSubmit").click(function(e) {
                e.preventDefault();
		console.log("Roulette Begun!\n");

		var movie = Math.floor(Math.random() * 1000) + 1;
                var myurl="https://api.themoviedb.org/3/movie/" + movie + "?api_key=c59173680a889c0419dae6d8320bd867";
                $.ajax({
                        url : myurl,
                        dataType : "json",
                        success : function(json) {
                                console.log(json);

				var results = "";
				results += '<h3>' + json.title + '</h3>';
				results += '<img src=http://www.tmdb.org"' + json.poster_path + '"/>';
				results += '<p>' + json.tagline + '</p>';
				//overview
				//rating

				$("#results").html(results);
                        }
                });
        });
});
