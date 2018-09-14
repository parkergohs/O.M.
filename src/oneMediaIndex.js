/*************
**************
Toggle Menu Screens
**************
*************/
var 
siteNavMenuScreen = document.getElementById("siteNavMenuScreen"),
mainMenuScreen = document.getElementById("mainMenuScreen"),
settingsMenuScreen = document.getElementById("settingsMenuScreen");

var showSiteNavMenu = function()
{ 
 if (siteNavMenuScreen.style.display == "none")
 {
  siteNavMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  siteNavMenuScreen.style.display = "none";	 
 }
 mainMenuScreen.style.display = "none";	 
 settingsMenuScreen.style.display = "none";	 
}

var showMainMenu = function()
{ 
 if (mainMenuScreen.style.display == "none")
 {
  mainMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  mainMenuScreen.style.display = "none";	 
 }
 siteNavMenuScreen.style.display = "none";	 
 settingsMenuScreen.style.display = "none";	 
}

var showSettingsMenu = function()
{
 if (settingsMenuScreen.style.display == "none")
 {
  settingsMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  settingsMenuScreen.style.display = "none";	 
 }
 siteNavMenuScreen.style.display = "none";	 
 mainMenuScreen.style.display = "none";	 
}



/*************
**************
Sign In Validation
**************
*************/
var signIn = function()
{
 if (document.getElementById("accountInput").value == ("me" || "me@g.com") && document.getElementById("passwordInput").value == ("mypassword"))
 {
  alert("Welcome Back, sir!");
  showSettingsMenu();
 }
 else
 {
  alert("Try again"); 
 }
}


/*************
**************
Search functions
**************
*************/
var 
advancedSearchOptions = document.getElementById("advancedSearchOptions");

var toggleAdvancedSearchOptions = function() 
{
 
 if (advancedSearchOptions.style.display == "none")
 {
  advancedSearchOptions.style.display = "block";	 
 }
 else
 {
  advancedSearchOptions.style.display = "none";	 
 }
}

var search = function()
{
 var searchInput = document.getElementById("searchInput").value;
 alert("Searching for " + searchInput);
}

var advancedSearchAlgorithm = function()
{
/*************
1. Loop through all the advanced search fields and save values of each option 

2.

3.
*************/ 
}

