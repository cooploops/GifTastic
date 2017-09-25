window.onload = function() {

    var tvGifs = {
        shows: ["The Office", "Parks and Rec", "Community", "Silicon Valley"],
        tvShow: "",
        limit: 10,

        searchFunction: function() {
        	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvGifs.tvShow + "&api_key=aX93XxYW0ucx7qVVKPBI21K7uiMFpRzn&limit=10";
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                .done(function(response) {
                	console.log(response);
                	for(i=0;i<tvGifs.limit;i++){
	                	var rating = response.data[i].rating;
	                	var mp4 = response.data[i].images.looping.mp4;
	                	var gif = $("<video class=video>");
	                	gif.html("<source src='"+mp4+"'></source>")
	                	// var tvShowRow = $("<div class='row'>");
	                	var tvShowColumn =$("<div class='col'>");
	                	tvShowColumn.append(gif);
	                	$(".row").append(tvShowColumn);
                	}
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        },

        renderButtons: function() {
        	$(".tvShowsList").empty();
        	for(i=0;i<tvGifs.shows.length;i++){
        		var newButton = $("<button>");
        		newButton.addClass("btn btn-info tvShowButton");
        		newButton.attr("type","button");
        		newButton.html(tvGifs.shows[i]);
        		$(".tvShowsList").append(newButton);
        	}
        }
    }
    // generate initals buttons to display
    tvGifs.renderButtons();

    $("#addShow").click(function(event){
	var newShow = $("#tvShowName").val().trim();
	console.log(newShow);
		if(tvGifs.shows.indexOf(newShow) === -1 ){
		tvGifs.shows.push(newShow);
		tvGifs.renderButtons();
		} else {
			// do nothing
		}
	});

	$(document).on("click",".tvShowButton",(function(){
	console.log("here");
	tvGifs.tvShow = $(this).text();
	console.log(tvGifs.tvShow);
	var tvShowRow = $("<div class='row'>");
	$("form").append(tvShowRow);
	tvGifs.searchFunction();
	}));

	$(document).on("click",".video",function(){
		
	$(this).paused?this.play():this.pause();
	})

}





