
let query = prompt("enter query");

newurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=eknM4Z7Rm1Z1fL6mj81V5sn18rQehL6H";

$.ajax({
    url: newurl,
    method: "GET"
}).then(function(response){
    console.log(response);
});