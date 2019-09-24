// from data.js
var tableData = data;
var tbody= d3.select("tbody");
var date_imput= d3.select("#datetime");
function pop_table(arr){
    tbody.html("")
    arr.map(function (obj){
        var row= tbody.append("tr")
        for (var key in obj) {
            row.append("td").text (obj[key])
          }
    })
}
pop_table (tableData)
// YOUR CODE HERE!
d3.select("#filter-btn").on("click",function(){
    d3.event.preventDefault()
    var user_imput= date_imput.property("value")
    console.log(user_imput)
    var filterData= tableData.filter(obj=> obj.datetime=== user_imput)
    pop_table(filterData)
})