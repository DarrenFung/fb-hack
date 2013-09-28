'use strict';

console.log("FB Hack loaded");

var draggables = [
	"#pinnedNav", // Favorites
	"#pagesNav",
	"#groupsNav",
	"#appsNav"
];

var styling = {
	border: "5px dashed #5A9ED6",
	padding: "5px",
	cursor: "move",
	margin: "10px"
};

// actually runs on 'edit' button click
$( document ).ready( function(){
	addStylings();
});

function addStylings () {
	// var iconUrl = chrome.extension.getURL("images/move.png");
	// var dragThis = '<div class="dragThis"><img src="' + iconUrl + '" /></div>';
	var dragThis = '<div class="dragThis"> X </div>';
	// var dragThis = '<div class="dragThis" style="color: white;cursor: move;position: absolute;margin-left: -40px;display: block;background: #03589E;width: 30px;height: 20px;text-align: center;padding-top: 5px;margin-top: -10px;"> X </div>';
	var dragThisStyling = {
		"color": "white",
		"cursor": "move",
		"position": "absolute",
		"margin-left": "-40px",
		"display": "block",
		"background": "#03589E",
		"width": "30px",
		"height": "20px",
		"text-align": "center",
		"padding-top": "5px",
		"margin-top": "-10px"
	};

	for (var i = 0; i < draggables.length; i++) {
		$(draggables[i]).css(styling);
		$(draggables[i]).prepend(dragThis);
	};

	$('.dragThis').css(dragThisStyling);
}

/*begin pagelet_navigation*/
$("#pagelet_pinned_nav").attr({
	"data-row" : "1",
	"data-col" : "1",
	"data-sizex" : "1",
	"data-sizey" : "1"
});

$("#pagelet_bookmark_nav").attr({
	"data-row" : "2",
	"data-col" : "1",
	"data-sizex" : "1",
	"data-sizey" : "3"
});

$("#pagelet_navigation div").gridster({
	widget_margins: [0, 0],
	widget_base_dimensions: [180, 130],
	widget_selector: "div"
}).data('gridster');
/*end pagelet_navigation*/