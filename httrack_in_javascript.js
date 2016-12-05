/////////////////////////////////////
/// Workaround TIMESTAMP:  (only dat, not time) + toISOString-Function doesn't work
/////////////////////////////
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


/// Settings
  // Instruction
/* Scheme: ("Program path" "URL" "storage folder" "mirror depth")
 * "-O" => define storage folder, e.g. = "./YourFolder" => "." folder of the script + "Name of your Folder"
 * "--depth=X" = set mirrot depth
*/

  // A. httrack path
var path = "P:/WinHTTrack/httrack.exe"
  // B. url
preURL = "\""
postURL = "\""
/// TODO
var url = preURL + "https://www.YOURDOMAIN.de/" + postURL;
  // C. Date as Folder Name
var preFolder = "-O \"./";
// look at Workaround above
// basically I am trying to get a date int this format "YYYY-MM-DD"
var date = fnToISO();
var postFolder = "\"";
var folder = preFolder + date + postFolder;
  // D. Options
var options = "--depth=1"

var specifics = path + " " + url + " " + folder + " " + options;

/// Execute
function runHTTrack (order){
  WshShell = new ActiveXObject("Wscript.Shell");
  WshShell.run(order);
}

// execute .js
runHTTrack(specifics);
