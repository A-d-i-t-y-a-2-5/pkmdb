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
});

$(document).ready(function(){
    $('#myInput').keyup(function(){
        var value = $(this).val().toLowerCase();
        $('tr:gt(0)').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});