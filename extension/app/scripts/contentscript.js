'use strict';

console.log("FB Hack loaded");

var styling = {
	border: "5px dotted #5A9ED6",
	padding: "5px",
	cursor: "move",
	margin: "10px"
};

var draggables = [
	"#pinnedNav", // Favorites
	"#pagesNav",
	"#groupsNav",
	"#appsNav"
];

function addStylings () {
	for (var i = 0; i < draggables.length; i++) {
		$(draggables[i]).css(styling);
	};
}

addStylings();

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