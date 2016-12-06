///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/// Javascript to run HTTrack in console
/// @ HerodotThukydides, 2016
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// User Settings
  // Program Path
    // here absolute, relative is also possible
    // TODO: put in your path
var path = "P:/WinHTTrack/httrack.exe";
  // Which URL
    // TODO: put in your url
var url = "https://www.YOURDOMAIN.de/"
  // options -> for documentation see: https://www.httrack.com/html/fcguide.html
    // here: mirror depth, display progress, no html index
var options = "--depth=1 --display -I0"

///////////////////////////////////////////////////////////////////////////////
/// Workaround TIMESTAMP:  (only dat, not time) + toISOString-Function doesn't work
///////////////////////////////////////////////////////////////////////////////
function padzero(n) {
     return n < 10 ? '0' + n : n;
 }
 function pad2zeros(n) {
     if (n < 100) {
         n = '0' + n;
     }
     if (n < 10) {
         n = '0' + n;
     }
     return n;
 }

 function toISOString(d) {
     var iso = d.getUTCFullYear() + '-' +  padzero(d.getUTCMonth() + 1) + '-' + padzero(d.getUTCDate()) + 'T' + padzero(d.getUTCHours()) + ':' +  padzero(d.getUTCMinutes()) + ':' + padzero(d.getUTCSeconds()) + '.' + pad2zeros(d.getUTCMilliseconds()) + 'Z';
     // Cut of the time, so only the date is there
     return iso.slice(0,10);
 }
 function fnToISO() {
      var now = new Date();
      return toISOString(now);
 }

 ///////////////////////////////////////////////////////////////////////////////
 /// Set up HTTrack and run it in a console
 ///////////////////////////////////////////////////////////////////////////////
function settings(path, url, options) {
    // A. URL fill material
  preURL = "\""
  postURL = "\""
  var urlComp = preURL + url + postURL;
    // B. put date as folder name
      // command "-O" determines the a target folder
      // here relative path  e.g. = "./2016-12-24"
  var preFolder = "-O \"./";
      // Daten -> look "Workaround TIMESTAMP" -> basic format is "YYYY-MM-DD"
  var date = fnToISO();
  var postFolder = "\"";
  var folder = preFolder + date + postFolder;
    // C. Options
      // value "options" is a parameter from above and won't be changed in this function

    // D. Return the terminal command as a strings
  return specifics = path + " " + urlComp + " " + folder + " " + options;
}

  // Execute HTTrack in the shell
function runHTTrack (order){
  WshShell = new ActiveXObject("Wscript.Shell");
  WshShell.run(order);
}

  // Run HTTrack with the specifics of the "settings"-function
    // written out it would look for example like this:
    // runHTTrack ("P:/WinHTTrack/httrack.exe /k \"https://www.kaufland.de/\" -O \"./Meine Webseiten/1_Kaufland\" --depth=1");
runHTTrack( settings(path, url, options) );
