var video = new Array();

	for (var i = 0; i < 100; i++) {
    	video[i] = new Array("","");
  	}
	
	video[0][0]="B4PEXLODw9c";
	video[0][1]="SpaceX Grasshopper Test Platform Hovers at 12 Stories";
	
	video[1][0]="pjAIwtdAyQA"
	video[1][1]="NASA Lunar Lander Test Flight";
	
	video[2][0]="i7yPVaNdGBw";
	video[2][1]="Dream Chaser Space Shuttle Concept Video";
	
	video[3][0]="0sRYJ6X6BEY";
	video[3][1]="International Space Station Footage";
	
	video[4][0]="SuR6sDMAdXs";							
	video[4][1]="Blue Origin Escape Vehicle Test";

	video[5][0]="voYsnECLduQ";
	video[5][1]="Mars Curiosity Landing";
	
	video[6][0]="WlGemHL5vLY";
	video[6][1]="Neil deGrasse Tyson: 'Audacious Visions'";
	
	video[7][0]="hBnO8lJd2JU";
	video[7][1]="Nasa's Future Missions";

	video[8][0]="dohU61DuEaI"
	video[8][1]="Niel deGrasse Tyson: Science and Politics"

	video[9][0]="TQ6tZtGrShg";
	video[9][1]="Elon Musk Gives a Tour of SpaceX";
	
	video[10][0]="TysxQ9lPeKY";
	video[10][1]="Michio Kaku on the Space Program";
	
	video[11][0]="SBiY0Fn1ze4";
	video[11][1]="Gravity Probe B Experiment Results";
	
	video[12][0]="YvypMHkUpKo";
	video[12][1]="Skylab, the First Space Station";
	
	video[13][0]="HXdjxPY2j_0";
	video[13][1]="SpaceX Grasshopper Divert Maneuver";
	
	
	

$(document).ready(function() {
	
	populate_thumbnails(video, "#thumbnails");
	$('#iframe-player').attr('src', 'http://www.youtube.com/embed/'+video[0][0]);

	
	$(".video").live('click', function() {

		$('#iframe-player').attr('src', 'http://www.youtube.com/embed/'+$(this).attr("id")+'?autoplay=1' );
		
	});
	

});


function populate_thumbnails(array, divId)
{
	
	var htmlString = '';
	
	
	for (var i = array.length-1; i > -1; i--) {
		if(array[i][0]!="")
		{
		htmlString= htmlString+
		'<div class="video" id='+array[i][0]+'><div class="thumbnail"> <img src="http://img.youtube.com/vi/'+array[i][0]+'/3.jpg"></div>  <div class="description"> <p class="desc">'+ array[i][1]+'</p> </div></div> ';
		}
  	}
	
	/*
	$.each(array, function(index, value) { 
		if(value[0]!="")
		{
		htmlString= htmlString+
		'<div class="video" id='+value[0]+'><div class="thumbnail"> <img src="http://img.youtube.com/vi/'+value[0]+'/3.jpg"></div>  <div class="description"> <p class="desc">'+ value[1]+'</p> </div></div> ';
		}
	});
	*/
	
	$(divId).fadeOut(300);

	setTimeout(function(){$(divId).html(htmlString).fadeIn(300)}, 300);
	
}
