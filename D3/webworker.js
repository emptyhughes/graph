var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  if(i > 1000) return
  setTimeout("timedCount()",500);
}

timedCount();

self.addEventListener('message', function(e) {
  self.postMessage(e.data);  
}, false);