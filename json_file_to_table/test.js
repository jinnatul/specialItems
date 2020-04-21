$(function() {
    $.getJSON('dhakacity.json', function(res) {
        makeTable(res);
    });
});

function makeTable(res) {
    let dhakacityArray = Object.entries(res);
    console.log(dhakacityArray)
    let table = "<table><tr><th>Name</th><th>Cases</th></tr>";

    for (let index = 0; index < dhakacityArray.length; index++) {
        table += "<tr><td>"+dhakacityArray[index][0]+"</td><td>"
                        +dhakacityArray[index][1]+"</td></tr>"
    }
    table += "</table>";

    $('#divId').html(table)
}