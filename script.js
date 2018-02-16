$(document).ready(function() {
        $("#movieSubmit").click(function(e) {
                e.preventDefault();
		console.log("Roulette Begun!\n");

                var myurl="https://api.themoviedb.org/3/movie/550?api_key=c59173680a889c0419dae6d8320bd867";
                $.ajax({
                        url : myurl,
                        dataType : "json",
                        success : function(json) {
                                console.log(json);

                                var results = "";
                                //results += '<h2>Answer to Query: ' + value + '</h2>';
                                //for (var i=0; i < json.items.length; i++) {
                                //}

                                $("#results").html();
                        }
                });
        });
});
