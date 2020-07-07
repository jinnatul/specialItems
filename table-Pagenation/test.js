$(function() {
    var apiURL = "https://corona-bd.herokuapp.com/district";
    $.get(apiURL, function() {})
        .done(function(res) {
            setData(res);
            changeData(res.data);
         })
        .fail(function () {
            console.log('Internal Problem!!!');
        });    
});

function setData(res) {
    var pages = Math.ceil(res.data.length / 10);

    var btnStr = "";
    for (var i = 1; i <= pages; i++) {
        btnStr += "<input type='button' class='commonClass' id='"+ i +"' value='"+ i +"'>";
    }
    makeTable(res.data, 1);
    $('#myBtn').html(btnStr);
}

function changeData(data) {
    $(".commonClass").click(function () {
        var pageNum = this.id;
        makeTable(data, pageNum);
    });
}

function makeTable(data, pageNum) {
    var tableStr = "<table><tr><th>District</th><th>#</th></tr>";
    var currentNum = pageNum * 10
    for (var i = currentNum - 10; i < Math.min(currentNum, data.length); i++) {
        tableStr += "<tr><td>"+ data[i].name +"</td>";
        tableStr += "<td>"+ data[i].count +"</td></tr>";
    }
    tableStr += "</table>";
    $('#myTable').html(tableStr);
}