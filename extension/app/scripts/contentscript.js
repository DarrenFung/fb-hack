'use strict';

console.log("FB Hack Started Loading");

$("._li").addClass("widget_style");
$("._li div").sortable();
$("._li div").disableSelection();

$("#pagelet_bluebar").addClass("draggable ui-widget-content");
$("#pagelet_bluebar").draggable({ snap: "#pagelet_dock", snapMode: "outer" });
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
