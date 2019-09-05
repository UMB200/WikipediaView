//////// Using jQuery making ajax call

//parameter for searching text thta user inputs
var searchText;
//parameter for API search link
var apiLink= 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
var apiLinkcallType = '&format=json&callback=?';

$(document).ready(function() {
	//click search button 
	$('#searchBtn').click(function(){
		//retrieve searching text
		searchText = $('#searchText').val();
		var mainLink = apiLink + searchText + apiLinkcallType;

		$.ajax( {
			type: "GET",
			url: mainLink,
			async: false,
			dataType: 'json',
			success: function(resultData){

				$('#resultSearch').html('');

					// $('#resultSearch').prepend(resultData[3][0]);
				for(var i = 0; i < resultData.length; i++){ 
					$('#resultSearch').prepend("<li><a href= " + resultData[3][i] +">" + resultData[1][i] +
					"</a><p>" + resultData[2][i] + "</p></li>");
			}
			//clear input field
			$('#searchText').val('');
			},
			error: function(erData){
				alert("Something wrong has happened");
			}

		});


	});
	$('#searchText').keypress(function(keyBtn){
			if(keyBtn.which == 13){
				$('#searchBtn').click();
			}
		} )
});