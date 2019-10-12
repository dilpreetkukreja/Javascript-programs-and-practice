window.onload = prepareLinks;

function prepareLinks() {
  if (!document.getElementById || !document.getElementsByTagName) {
    return;
  }
  if (!document.getElementById("people")) {
    return;
  }
  var list = document.getElementById("people");
  var links = list.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    links[i].onclick = function() {
      var query = this.getAttribute("href").split("?")[1];
      var url = "people.php?"+query;
      return !grabFile(url);
    };
  }
}
function grabFile(file) {
  var request = getHTTPObject();
  if (request) {
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open("GET", file, true);
    request.send(null);
    return true;
  } else {
    return false;
  }
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      var details = document.getElementById("details");
      details.innerHTML = request.responseText;
    }
  }
}

function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}