var mstRcnt = new Array();

	mstRcnt[0]= new Array("","");
	mstRcnt[1]= new Array("","");
	mstRcnt[2]= new Array("","");
	mstRcnt[3]= new Array("","");
	mstRcnt[4]= new Array("","");
	mstRcnt[5]= new Array("","");
	
	mstRcnt[0][0]="B4PEXLODw9c";
	mstRcnt[0][1]="SpaceX grasshopper test platform hovers at 12 Stories";
	
	mstRcnt[1][0]="pjAIwtdAyQA"
	mstRcnt[1][1]="NASA lunar lander test flight";
	
	mstRcnt[2][0]="i7yPVaNdGBw";
	mstRcnt[2][1]="Dream Chaser space shuttle concept video";
	
	mstRcnt[3][0]="0sRYJ6X6BEY";
	mstRcnt[3][1]="International space station footage";
	
	mstRcnt[4][0]="SuR6sDMAdXs";							
	mstRcnt[4][1]="Blue origin escape vehicle test";

	mstRcnt[5][0]="voYsnECLduQ";
	mstRcnt[5][1]="Mars curiosity landing";
	
	

var epic = new Array();

	epic[0]= new Array("","");
	epic[1]= new Array("","");
	epic[2]= new Array("","");
	epic[3]= new Array("","");
	epic[4]= new Array("","");
	epic[5]= new Array("","");
	epic[6]= new Array("","");
	epic[7]= new Array("","");
	
	epic[0][0]="WlGemHL5vLY";
	epic[0][1]="Audacious visions";
	
	epic[1][0]="hBnO8lJd2JU";
	epic[1][1]="Nasa's future missions";

	epic[2][0]="7i2QDpGRQKc"
	epic[2][1]="Niel Tyson and the NASA budget"

	epic[3][0]="TQ6tZtGrShg";
	epic[3][1]="Elon Musk gives a tour of SpaceX";
	
	epic[4][0]="TysxQ9lPeKY";
	epic[4][1]="Michio Kaku on the Space Program";
	
	epic[5][0]="SBiY0Fn1ze4";
	epic[5][1]="Gravity probe B experiment results";
	
	epic[6][0]="YvypMHkUpKo";
	epic[6][1]="Skylab, the first space station";
	
	epic[7][0]="Ajvkbe1zjjs";							
	epic[7][1]="The Space Race";


$(document).ready(function() {
	
	populate_thumbnails(mstRcnt, "#thumbnails");
	$('#iframe-player').attr('src', 'http://www.youtube.com/embed/'+mstRcnt[0][0]);
	
	$(".selector-tab").live('click', function() {
	
		if	($(this).attr("id") == "recent")
		{
			populate_thumbnails(mstRcnt, "#thumbnails");
		}
		
		if	($(this).attr("id") == "epic")
		{
			populate_thumbnails(epic, "#thumbnails");
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
