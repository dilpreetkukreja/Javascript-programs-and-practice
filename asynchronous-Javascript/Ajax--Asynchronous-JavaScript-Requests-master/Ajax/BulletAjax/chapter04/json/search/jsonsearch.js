function getScript(url) {
  var scripttag = document.createElement("script");
  scripttag.setAttribute("type","text/javascript");
  scripttag.setAttribute("src",url);
  document.getElementsByTagName("head")[0].appendChild(scripttag);
}

function searchYahoo(query) {
  var url = "http://api.search.yahoo.com/NewsSearchService/V1/newsSearch?";
  url+= "appid=adactio";
  url+= "&query="+escape(query);
  url+= "&output=json";
  url+= "&callback=parseResponse";
  getScript(url);
}

function parseResponse(data) {
// empty the div
  var results = document.getElementById("results");
  while (results.hasChildNodes()) {
    results.removeChild(results.lastChild);
  }
// loop through the search results
  for (var i=0; i<data.ResultSet.Result.length; i++) {
    var title = data.ResultSet.Result[i].Title;
    var summary = data.ResultSet.Result[i].Summary;
    var url = data.ResultSet.Result[i].Url;
// create the headline link
    var header = document.createElement("h2");
    var link = document.createElement("a");
    link.setAttribute("href",url);
    var text = document.createTextNode(title);
    link.appendChild(text);
    header.appendChild(link);
// create the summary paragraph
    var para = document.createElement("p");
    var paratext = document.createTextNode(summary);
    para.appendChild(paratext);
// insert the markup
    results.appendChild(header);
    results.appendChild(para);
  }
}