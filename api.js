
let query = prompt("enter query");
let minDate = prompt("enter min pub year");
if (minDate === "" || minDate < 1000 || maxDate > 9999) {
    minDate = 1000;
}
let maxDate = prompt("enter max pub year");
if (maxDate === "" || maxDate > 9999 || maxDate < 1000) {
    maxDate = 2019;
}
let displayNum = prompt("how many articles to return (deafult 10)");
if (displayNum === "" ||displayNum < 0) {
    displayNum= 10;
}


newurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date=" + minDate + "0101&end_date=" + maxDate + "1231&sort=relevance" + "&api-key=eknM4Z7Rm1Z1fL6mj81V5sn18rQehL6H";

$.ajax({
    url: newurl,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < displayNum; i++) {
        let articleDiv = $("<div>");
        let text = response.response.docs[i].headline.main;
        let newURL = response.response.docs[i].web_url;
        // console.log(text);
        let a = $("<a>");
        a.text(text);
        a.attr("href", newURL);
        let p = $("<p>");
        let date = $("<p>");
        p.text(response.response.docs[i].snippet);
        date.text(response.response.docs[i].pub_date);
        articleDiv.append(a);
        articleDiv.append(date);
        articleDiv.append(p);
        $("#main").append(articleDiv);
    }
});

