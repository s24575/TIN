$(document).ready(function () {
    var lastData = null;

    function fetchData() {
        $.getJSON("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php", function (data) {
            updateDOM(data);
            lastData = data;
        });
    }

    function updateDOM(data) {
        var stockTable = $('#stock-table tbody');

        $.each(data.stock, function (firma, kurs) {
            var old = $(`tr:contains("${firma}")`);

            if (old.length === 0 || old.text() !== firma + kurs) {
                var row = $('<tr>');
                row.append($('<td>').text(firma));
                row.append($('<td>').text(kurs));
                stockTable.append(row);
            } else{
                console.log("same");
            }
        });

        updateNews(data.news);
    }

    function updateNews(data) {
        var newsRotator = $('#news-rotator');
        newsRotator.prepend($('<div class="banner">').text(data).fadeOut(0));
        if (newsRotator.children().length > 3) {
            newsRotator.children().last().remove();
        }
    }

    function rotate() {
        var active = $("#news-rotator .banner.active");
        var next = active.next();
        if (next.length == 0)
            next = $("#news-rotator .banner:first");
        active.removeClass("active").fadeOut(200);
        next.addClass("active").fadeIn(200);
    }

    function resetRotator(elem) {
        $(elem + " .banner").fadeOut(0);
        $(elem + " .banner:first").fadeIn(0);
    }

    setInterval(fetchData, 10000);
    fetchData();

    resetRotator("#news-rotator");
    setInterval(rotate, 2500);
});
