var doc = window.document,
    apiRecvest = "https://www.googleapis.com/youtube/v3/search?part=snippet",
    maxResult = "&maxResults=4&q=",
    typeTxt = "&type=text.json",
    apiKay = "&key=AIzaSyDGAYB2NL15XWyk8fOJyIg_VEY4JF62MeU";
var searchContent=doc.getElementById("search").value;
function req() {
    var searchClick = doc.getElementById("#searchBtn");
    searchClick.onclick(searchContent);
    loadJson(url,gotData)
    
  };
var buildApiRequest = apiRecvest + maxResult + searchContent + typeTxt + apiKay;

     

fetch(buildApiRequest)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

     
