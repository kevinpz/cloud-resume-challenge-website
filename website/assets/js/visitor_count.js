$(document).ready(function(){
    $.getJSON("https://us-east1-coffeetime-dev-282015.cloudfunctions.net/cloudresume-visitor-count", function(data){
        console.log(data.currentVisitor);
        $("#visitor-count").text(data.currentVisitor);
    }).fail(function(){
        console.log("An error has occurred while fetching the visitor count.");
    });
});