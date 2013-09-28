'use strict';

console.log("FB Hack Started Loading");

$("._li").addClass("widget_style");
$("._li div").sortable();
$("._li div").disableSelection();

$("#pagelet_bluebar").addClass("draggable ui-widget-content");
$("#pagelet_bluebar").draggable({ snap: "#bottomContent", snapMode: "outer", connectWith: ".widget_style", revert: "invalid"});
$("#pagelet_bluebar").disableSelection();

$('#rightCol').addClass("widget_style");
$("#rightCol div").sortable({connectWith: ".widget_style"});
$("#rightCol div").disableSelection();

$('#leftCol').addClass("widget_style");
$("#leftCol div").sortable({connectWith: ".widget_style"});
$("#leftCol div").disableSelection();

console.log("FB Hack Finished Loading");
/*
pagelet_bluebar
pagelet_welcome_box
pagelet_navigation
pagelet_pinned_nav
pagelet_bookmark_nav
pagelet_friends_online
pagelet_advertiser_panel
pagelet_rhc_ticker
pagelet_reminders
pagelet_ego_pane
pagelet_rhc_footer
pagelet_megaphone
pagelet_composer
pagelet_home_stream
pagelet_stream_pager
pagelet_sidebar
pagelet_ticker
pagelet_dock
ChatTabsPagelet
BuddylistPagelet
*/

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

var undoStyling = {
	border: "none",
	padding: "0",
	cursor: "default",
	margin: "0"
};

// actually runs on 'edit' button click
$( document ).ready( function(){
	chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
		if (request.action == "enter") {
			sendResponse({farewell: "goodbye"});
			enterEditMode();
		}
		if (request.action == "exit") {
			sendResponse({farewell: "goodbye"});
			exitEditMode();
		}
	});	
});

function enterEditMode () {
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

function exitEditMode () {
	for (var i = 0; i < draggables.length; i++) {
		$(draggables[i]).css(undoStyling);
	}
	$('.dragThis').remove();
}