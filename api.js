
let query = prompt("enter query");
let minDate = prompt("enter min pub year");
let maxDate = prompt("enter max pub year");


newurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date=" + minDate + "0101&end_date=" + maxDate + "1231&sort=relevance" + "&api-key=eknM4Z7Rm1Z1fL6mj81V5sn18rQehL6H";

$.ajax({
    url: newurl,
    method: "GET"
}).then(function(response){
    console.log(response);
});