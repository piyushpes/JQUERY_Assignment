var x=16;

$(document).ready(function(){

create();
$("#createbutton").click(function(){buttonClick();})

});


function create(){
	var size=(960-2*x)/x; //Subtracted 2px for border and 4px for margin
for(j=1;j<=x;j++)
for (i=1;i<=x;i++)
{     if(i===1)
	  $("<div></div>").appendTo("#container").addClass("columnone").css('width',size+'px').css('height', size+'px');
	  else $("<div></div>").appendTo("#container").css('width',size+'px').css('height', size+'px');
              
              
}

$("#container div").hover(function(){$(this).addClass("colordiv");});
}

function buttonClick(){
$("#container div").remove();
x=prompt("Enter Size of new grid");
create();
}