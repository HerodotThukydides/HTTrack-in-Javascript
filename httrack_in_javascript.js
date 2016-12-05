// Scheme:
// ("Program path" "URL" "storage folder" "mirror depth")
// "-O" = set storage folder
// storage folder =   "." = folder of the script + "/YourFolder"
// "--depth=X" = set mirrot depth

function runHTTrack (){
  WshShell = new ActiveXObject("Wscript.Shell");
  WshShell.run ("P:/WinHTTrack/httrack.exe /k \"https://www.YOURDOMAIN.de/\" -O \"./YourFolder\" --depth=1");
}

runHTTrack();
