'use strict';

console.log("loading");

$( document ).ready( function(){
	$('#edit').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var data = {
				action: "enter"
			}
			chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
				console.log(response.farewell);
			});
		});
	});
	$('#save').click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var data = {
				action: "exit"
			}
			chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
				console.log(response.farewell);
			});
		});
	});
});