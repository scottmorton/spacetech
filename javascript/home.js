var video = new Array();

	for (var i = 0; i < 14; i++) {
    	video[i] = new Array("","");
  	}
	
	video[0][0]="B4PEXLODw9c";
	video[0][1]="SpaceX grasshopper test platform hovers at 12 Stories";
	
	video[1][0]="pjAIwtdAyQA"
	video[1][1]="NASA lunar lander test flight";
	
	video[2][0]="i7yPVaNdGBw";
	video[2][1]="Dream Chaser space shuttle concept video";
	
	video[3][0]="0sRYJ6X6BEY";
	video[3][1]="International space station footage";
	
	video[4][0]="SuR6sDMAdXs";							
	video[4][1]="Blue origin escape vehicle test";

	video[5][0]="voYsnECLduQ";
	video[5][1]="Mars curiosity landing";
	
	video[6][0]="WlGemHL5vLY";
	video[6][1]="Audacious visions";
	
	video[7][0]="hBnO8lJd2JU";
	video[7][1]="Nasa's future missions";

	video[8][0]="7i2QDpGRQKc"
	video[8][1]="Niel Tyson on the NASA budget"

	video[9][0]="TQ6tZtGrShg";
	video[9][1]="Elon Musk gives a tour of SpaceX";
	
	video[10][0]="TysxQ9lPeKY";
	video[10][1]="Michio Kaku on the Space Program";
	
	video[11][0]="SBiY0Fn1ze4";
	video[11][1]="Gravity probe B experiment results";
	
	video[12][0]="YvypMHkUpKo";
	video[12][1]="Skylab, the first space station";
	
	video[13][0]="Ajvkbe1zjjs";							
	video[13][1]="The Space Race";


$(document).ready(function() {
	
	populate_thumbnails(video, "#thumbnails");
	$('#iframe-player').attr('src', 'http://www.youtube.com/embed/'+video[0][0]);
	
	$(".selector-tab").live('click', function() {
	
		if	($(this).attr("id") == "recent")
		{
			populate_thumbnails(video, "#thumbnails");
		}
		
		if	($(this).attr("id") == "video")
		{
			populate_thumbnails(video, "#thumbnails");
		}
		

	});
	
	$(".video").live('click', function() {

		$('#iframe-player').attr('src', 'http://www.youtube.com/embed/'+$(this).attr("id")+'?autoplay=1' );
		
	});
	

});


function populate_thumbnails(array, divId)
{
	
	var htmlString = '';
	
	$.each(array, function(index, value) { 
	 
		htmlString= htmlString+
		
		'<div class="video" id='+value[0]+'><div class="thumbnail"> <img src="http://img.youtube.com/vi/'+value[0]+'/3.jpg"></div>  <div class="description"> <p class="desc">'+ value[1]+'</p> </div></div> ';
	
	});
	
	$(divId).fadeOut(300);

	setTimeout(function(){$(divId).html(htmlString).fadeIn(300)}, 300);
	
}
