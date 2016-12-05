// Instruction
/* Scheme: ("Program path" "URL" "storage folder" "mirror depth")
 * "-O" => define storage folder, e.g. = "./YourFolder" => "." folder of the script + "Name of your Folder"
 * "--depth=X" = set mirrot depth
*/

function runHTTrack (){
  WshShell = new ActiveXObject("Wscript.Shell");
  WshShell.run ("P:/WinHTTrack/httrack.exe /k \"https://www.YOURDOMAIN.de/\" -O \"./YourFolder\" --depth=1");
}

runHTTrack();
