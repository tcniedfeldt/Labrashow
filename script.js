$(document).ready(function() {
        $("#netflixSubmit").click(function(e) {
                e.preventDefault();
		console.log("Roulette Begun!\n");

                var myurl= "https://reelgood.com/roulette/netflix?utm_medium=301&utm_source=netflixroulette";
                $.ajax({
                        url : myurl,
                        dataType : "json",
                        success : function(json) {
                                console.log(json);

                                //var results = "";
                                //results += '<h2>Answer to Query: ' + value + '</h2>';
                                //for (var i=0; i < json.items.length; i++) {
                                //}
                                //$("#stackResults").html(results);
                        }
                });
        });
});
