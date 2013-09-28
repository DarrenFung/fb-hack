'use strict';

console.log("FB Hack Started Loading");


// pagelet_bluebar
$("#pagelet_bluebar").attr({'data-row' : '1', 'data-col' : '1', 'data-sizex':'1', 'data-sizey':'1'});
// pagelet_bluebar


// globalContainer
$("#globalContainer").attr({'data-row' : '2', 'data-col' : '1', 'data-sizex':'1', 'data-sizey':'18'});
// globalContainer

/*
// composer
$("#pagelet_composer").addClass("widget_content");
$("#pagelet_composer").attr({'data-row' : '1', 'data-col' : '1', 'data-sizex':'9', 'data-sizey':'1'});
// composer

// home_stream
$("#pagelet_home_stream").addClass("widget_content");
$("#pagelet_home_stream").attr({'data-row' : '2', 'data-col' : '1', 'data-sizex':'9', 'data-sizey':'12'});
// home_stream
*/

$("._li").gridster({
    widget_margins: [5, 5],
    widget_base_dimensions: [1000, 50],
    widget_selector: "div"
}).data("gridster");

/*
$(".widget_content").gridster({
    widget_margins: [0, 5],
    widget_base_dimensions: [60, 60],
    widget_selector: "div",
    min_cols: 1
}).data("gridster");
*/

/*
// leftCol
$("#leftCol").addClass("widget_content");
$("#leftCol").attr({'data-row' : '1', 'data-col' : '1', 'data-sizex':'1', 'data-sizey':'1'});
// leftCol

// contentArea
$("#contentArea").addClass("widget_content");
$("#contentArea").attr({'data-row' : '1', 'data-col' : '2', 'data-sizex':'3', 'data-sizey':'1'});
// contentArea

// rightCol
$("#rightCol").addClass("widget_content");
$("#rightCol").attr({'data-row' : '1', 'data-col' : '3', 'data-sizex':'1', 'data-sizey':'1'});
// rightCol

$(".widget_content > div").gridster({
    widget_margins: [0, 0],
    widget_base_dimensions: [200, 754],
    widget_selector: "div",
    min_cols: 3
}).data("gridster");
*/

/*
// pagelet_reminders
$("#pagelet_reminders").attr({'data-row' : '1', 'data-col' : '1', 'data-sizex':'24', 'data-sizey':'1'});
// pagelet_reminders


// pagelet_ego_pane
$("#pagelet_ego_pane").attr({'data-row' : '2', 'data-col' : '1', 'data-sizex':'24', 'data-sizey':'15'});
// pagelet_ego_pane

// pagelet_rhc_footer
$("#pagelet_rhc_footer").attr({'data-row' : '3', 'data-col' : '1', 'data-sizex':'9', 'data-sizey':'1'});
// pagelet_rhc_footer

$("#rightCol div").gridster({
    widget_margins: [0, 0],
    widget_base_dimensions: [10, 50],
    widget_selector: "div",
    avoid_overlapped_widgets: true
}).data("gridster");
*/

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
