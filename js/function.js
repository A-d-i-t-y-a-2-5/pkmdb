$(document).ready(function(){
$.get('https://raw.githubusercontent.com/A-d-i-t-y-a-2-5/pkmdb/main/Pokedexv1.csv', function(data) {

    var html = '<table border="1" cellpadding="2" cellspacing="0" style="border-collapse: collapse" width="100%">\n';
    var rows = data.split("\n");
    var cols = rows[0].split(",");

    html += "<tr>";

    for (var i = 0; i < cols.length; i++)
    {
        html += "<th>" + cols[i] + "</th>";
    }

    html += "</tr>";

    for (var i = 1; i < rows.length - 1; i++) 
    {
        html += "<tr>";
        for (var j = 0; j < cols.length; j++) 
        {
            html += "<td>" + rows[i].split(",")[j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    $('#container').append(html);

    $("th").click(function(){
        var table = $(this).parents('table').eq(0);
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));

        //no idea about asc property
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++)
        {
            table.append(rows[i]);
        }
    });

    function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
        }
    }

    function getCellValue(row, index) { 
        return $(row).children('td').eq(index).text(); 
    }

});
    $('#myInput').keyup(function(){
        var value = $(this).val().toLowerCase();
        $('tr:gt(0)').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});
