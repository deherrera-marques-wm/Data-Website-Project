google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Player', 'Freethrow Percentage',],
        ['Steve Nash', 0.904085],
        ['Mark Price', 0.903895],
        ['Rick Barry', 0.899835],
        ['Peja Stojakovic', 0.8948],
        ['Ray Allen', 0.894115]
    ]);

    var options = {
        title: 'Top 5 best freethrow percentages',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Freethrow Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic1);

function drawBasic1() {

    var data = google.visualization.arrayToDataTable([
        ['Player', '3 point Percentage',],
        ['Luke Babbitt', 0.513],
        ['Kyle Korver', 0.492],
        ['Eric Gordon', 0.448],
        ['Stephen Curry', 0.443],
        ['Klay Thompson', 0.439]
    ]);

    var options = {
        title: 'Top 5 best 3 point shooters',
        chartArea: {width: '50%'},
        hAxis: {
            title: '3 point percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Player'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    chart.draw(data, options);
}
