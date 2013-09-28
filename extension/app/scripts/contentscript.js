'use strict';

console.log("FB Hack loaded");


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