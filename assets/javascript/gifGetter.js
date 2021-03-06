window.onload = function() {
    // some initial variables to hold some initial data
    var tvGifs = {
        topics: ["The Office", "Parks and Rec", "Community", "Silicon Valley", "One Punch Man", "FLCL", "Portlandia"],
        tvShow: "",
        limit: 10,
        // function to perform AJAX call to giphy API and once done generate image, rating, and column that holds it
        searchFunction: function() {
        	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvGifs.tvShow + "&api_key=aX93XxYW0ucx7qVVKPBI21K7uiMFpRzn&limit=10";
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                .done(function(response) {
                	console.log(response);
                    $(".row").remove();
                    var tvShowRow = $("<div class='row mx-2 justify-content-center'>");
                    tvShowRow.attr("id", tvGifs.tvShow)
                    $("form").append(tvShowRow);
                	for(i=0;i<tvGifs.limit;i++){
	                	var rating = response.data[i].rating;
	                	var mp4 = response.data[i].images.looping.mp4;
	                	var gif = $("<video class=video>");
	                	gif.html("<source src='"+mp4+"'></source>")
                        var gifRating = $("<h4>");
                        gifRating.html("Rating: "+ rating.toUpperCase());
	                	var tvShowColumn =$("<div class='col align-self-center'>");
                        tvShowColumn.prepend(gifRating);
	                	tvShowColumn.append(gif);
	                	$(".row").prepend(tvShowColumn);
                	}
                }) 
                // this will throw a "error" in the log if it fails
                .fail(function() {
                    console.log("error");
                })
                // will "always" display complete in console to show the ajax was performed (allows for better troubleshooting)
                .always(function() {
                    console.log("complete");
                });
        },
        // function to generate buttons at top of page
        renderButtons: function() {
        	$(".tvShowsList").empty();
        	for(i=0;i<tvGifs.topics.length;i++){
        		var newButton = $("<button>");
        		newButton.addClass("btn tvShowButton mx-1 my-1");
        		newButton.attr("type","button");
        		newButton.html(tvGifs.topics[i]);
        		$(".tvShowsList").append(newButton);
        	}
        }
    }

    // generate initals buttons to display
    tvGifs.renderButtons();

    // when you hit enter or click the submit button it'll check to see if it's already there THEN if it's blank and if neither then it will add a button for you
    $("#addShow").click(function(event){
    event.preventDefault();
	var newShow = $("#tvShowName").val().trim();
	console.log(newShow);
		if(tvGifs.topics.indexOf(newShow) === -1){
            if(newShow != ""){
        		tvGifs.topics.push(newShow);
        		tvGifs.renderButtons();
            }
		} else {
			// do nothing for right now
		}
	});

    // on click function to check for what TV show button you're click and then display the 10 gifs for it
	$(document).on("click",".tvShowButton",(function(){
	tvGifs.tvShow = $(this).text();
	console.log(tvGifs.tvShow);
	tvGifs.searchFunction();
	}));

    // on click function check for which gif you're clicking and then animating or pausing it
	$(document).on("click",".video",function(){
        this.paused?this.play():this.pause();
	})

}





