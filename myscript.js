function drawMyInpatientChart(data) {
    // Chart.jsのdataset用の配列
    var chartLabels = [], chartDataInpatient = [];
    for (var row in data) {
        chartLabels.push(data[row][0]);
        chartDataInpatient.push(data[row][1]);
    };

    // Chart.jsで描画
    drawMyBarChart("myChart24", chartLabels, chartDataInpatient, '#007bff', "空港検疫の入院治療等を要する者の残数",6 ,500);
}


function inpatient() {
        var def = $.ajax({
            url: 'inpatient.csv',
            cache: false,
            dataType: "text",
            beforeSend: function (xhr) {
                xhr.overrideMimeType('text/plain;charset=Shift_JIS');
            },
        });

        $.when(def).done(function (data) {
            data = $.csv.toArrays(data);
            drawMyInpatientChart(data);
        }).fail(function () {
            alert("データベースの読み込みエラーが発生しました。");
        });
}


function drawMyBarChart(tmpChartID, tmpChartLabels, tmpChartData, tmpColor, tmpLabel, tmpPadding, tmpMax) {
    var ctx = document.getElementById(tmpChartID).getContext("2d");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tmpChartLabels,
            datasets: [
                {
                    label: tmpLabel,
                    data: tmpChartData,
                    backgroundColor: tmpColor
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        padding: tmpPadding,
                        beginAtZero: true,
                        min: 0,
                        max: tmpMax
                    },
                    gridLines: {
                        drawBorder: false
                    }
                }]
            }
        }
    });
};



function drawRuisekiChart(tmpChartID, tmpChartLabels, tmpData, tmpColor, tmpLabel) {
    // chart.jsのdataset用の配列i
    var nRuiseki = 0;
    var chartData14 = [];


    chartData14.push(String("0"));


    for (var i = 1; i < tmpData.length; i++) {
        nRuiseki += Number(tmpData[i][1]);
        chartData14.push(String(nRuiseki));
    };

    // chart.jsで描画
    var ctx = document.getElementById(tmpChartID).getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tmpChartLabels,
            datasets: [
                {
                    label: tmpLabel,
                    data: chartData14,
                    backgroundColor: tmpColor
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false
                    }
                }]
            }
        }
        /*,
        options: {
        title: {
        display: true,
        text: "空港検疫全事例の到着日による累計陽性者数"
        }
        }*/
    });
}



function drawMyChart(tmpData) {
    // Chart.jsのdataset用の配列
    var chartLabels = [],
        chartData01 = [], chartData02 = [], chartData03 = [], chartData04 = [], chartData05 = [],
        chartData06 = [], chartData07 = [], chartData08 = [], chartData09 = [], chartData10 = [],
        chartData11 = [], chartData12 = [], chartData13 = [], chartData15 = [], chartData16 = [],
        chartData17 = [], chartData18 = [], chartData19 = [], chartData20 = [], chartData21 = [],
        chartData22 = [], chartData23 = [], chartData25 = [], chartData26 = [];

    for (var row in tmpData) {
        chartLabels.push(tmpData[row][0]);

        chartData01.push(tmpData[row][1]);
        chartData02.push(tmpData[row][2]);
        chartData03.push(tmpData[row][3]);
        chartData04.push(tmpData[row][4]);
        chartData05.push(tmpData[row][5]);
        chartData06.push(tmpData[row][6]);
        chartData07.push(tmpData[row][7]);
        chartData08.push(tmpData[row][8]);
        chartData09.push(tmpData[row][9]);
        chartData10.push(tmpData[row][10]);
        chartData11.push(tmpData[row][11]);
        chartData12.push(tmpData[row][12]);
        chartData13.push(tmpData[row][13]);

        chartData15.push(tmpData[row][14]);
        chartData16.push(tmpData[row][15]);
        chartData17.push(tmpData[row][16]);
        chartData18.push(tmpData[row][17]);
        chartData19.push(tmpData[row][18]);
        chartData20.push(tmpData[row][19]);
        chartData21.push(tmpData[row][20]);
        chartData22.push(tmpData[row][21]);
        chartData23.push(tmpData[row][22]);

        chartData25.push(tmpData[row][23]);
        chartData26.push(tmpData[row][24]);
    };

    // Chart.jsで描画
    drawMyBarChart("myChart01", chartLabels, chartData01, '#007bff', "空港検疫全事例の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart02", chartLabels, chartData02, '#4a0083', "居住地が東京都の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart03", chartLabels, chartData03, '#130da4', "居住地が千葉県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart04", chartLabels, chartData04, "black"  , "行動歴が非公表等の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart05", chartLabels, chartData05, '#a73945', "居住地が愛知県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart06", chartLabels, chartData06, '#303f9b', "居住地が大阪府の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart07", chartLabels, chartData07, '#003070', "フィリピン行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart08", chartLabels, chartData08, '#649ace', "居住地が兵庫県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart09", chartLabels, chartData09, '#95279e', "居住地が京都府の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart10", chartLabels, chartData10, '#00693d', "居住地が岐阜県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart11", chartLabels, chartData11, '#e60012', "アメリカ行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart12", chartLabels, chartData12, '#ff0000', "居住地が神奈川県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart13", chartLabels, chartData13, '#999999', "居住地が非公表等の到着日による陽性者数", 13, 35);
    drawRuisekiChart("myChart14", chartLabels, tmpData  , '#007bff', "空港検疫全事例の到着日による累計陽性者数");
    drawMyBarChart("myChart15", chartLabels, chartData15, '#007bff', "空港検疫のPCR・抗原定量検査の合算実施人数 前日比", 0, 5000);
    drawMyBarChart("myChart16", chartLabels, chartData16, '#e2223c', "居住地が埼玉県の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart17", chartLabels, chartData17, '#003f15', "パキスタン行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart18", chartLabels, chartData18, '#ffcc00', "インド行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart19", chartLabels, chartData19, '#dd0c39', "ネパール行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart20", chartLabels, chartData20, '#ff0000', "インドネシア行動歴の到着日による陽性者数", 13, 35);
    drawMyBarChart("myChart21", chartLabels, chartData21, '#0068b3', "居住地が福岡県の到着日による陽性者数",13 ,35);
    drawMyBarChart("myChart22", chartLabels, chartData22, '#ac3446', "居住地が広島県の到着日による陽性者数",13 ,35);
    drawMyBarChart("myChart23", chartLabels, chartData23, '#d62718', "ロシア行動歴の到着日による陽性者数",13 ,35);
    drawMyBarChart("myChart25", chartLabels, chartData25, '#006a4d', "バングラデシュ行動歴の到着日による陽性者数",13 ,35);
    drawMyBarChart("myChart26", chartLabels, chartData26, '#001b69', "イギリス行動歴の到着日による陽性者数",13 ,35);
}




function quarantine2() {
    setTimeout(function () {
        var def = $.ajax({
            url: 'quarantine2_residence.csv',
            cache: false,
            dataType: "text",
            beforeSend: function (xhr) {
                xhr.overrideMimeType('text/plain;charset=Shift_JIS');
            },
        });
        $.when(def).done(function (data) {
            data = $.csv.toArrays(data);
            drawMyChart(data);
        }).fail(function () {
            alert("データベースの読み込みエラーが発生しました。");
        });
    }, 1);
}




// Child rowに入れるデータの形成
function format(d) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +

        '<tr>' +
        '<td>備考:</td>' +
        '<td>' + d[9] + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>記事等URL1:</td>' +
        '<td>' + '<a href="' + d[11] + '" target="_blank" rel="noopener">' + d[11] + '</a>' + '</td>' +
        '</tr>' +

        '<tr>' +
        '<td>記事等URL2</td>' +
        '<td>' + '<a href="' + d[12] + '" target="_blank" rel="noopener">' + d[12] + '</a>' + '</td>' +
        '</tr>' +

        '</table>';
}



$(document).ready(function () {

    var $loading = $(".loading");

    var def = $.ajax({
        url: 'quarantine.csv',
        cache: false,
        dataType: "text",
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain;charset=Shift_JIS');
            //$loading.removeClass("is-hide");
        },
    });

    setTimeout(function () {

        $.when(def).done(function (data) {
            //$loading.addClass("is-hide");
            data = $.csv.toArrays(data);

            $.extend($.fn.dataTable.defaults, {
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json'
                }
            });

            //$('#quarantine-Table').append('<caption style="caption-side:top;text-align:left;">■厚生労働省が発表した新型コロナウイルス空港検疫陽性結果のまとめ 2020年3月～</caption>');
            var quarantineTable = $('#quarantine-Table').DataTable({
                scrollX: true,
                //scrollY: 650,
                processing: true,
                responsive: true,
                displayLength: 50,
                data: data,



                columns: [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    },
                    {
                        "data": 0,
                        "width": 10
                    },
                    {
                        "data": 1,
                        "width": 10
                    },
                    {
                        "data": 2,
                        "width": 40
                    },
                    {
                        "data": 3,
                        "width": 15
                    },
                    {
                        "data": 4,
                        "width": 15
                    },
                    {
                        "data": 5,
                        "width": 15
                    },
                    {
                        "data": 6,
                        "width": 15
                    },
                    {
                        "data": 7,
                        "width": 50
                    },
                    {
                        "data": 8,
                        "width": 100
                    },
                    {
                        "data": 9,
                        "width": 100
                    }
                ],
                "order": [[1, 'desc']],



                // 列設定
                columnDefs: [
                    {
                        "targets": 3,
                        "render": function (data, type, row) {
                            if (row[10] != "") {
                                return '<a href="' + row[10] + '" target="_blank" rel="noopener">' + data + '</a>';
                            }
                            else {
                                return data;
                            }
                        }
                    },

                    { "targets": [10], visible: false }

                ]



            });
            $('#quarantine-Table tbody').on('click', 'td.details-control', function () {

                var tr = $(this).closest('tr');
                var row = quarantineTable.row(tr);


                // 行の開閉イベント
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                } else {
                    row.child(format(row.data())).show();
                    tr.addClass('shown');
                }
            });




            // 「すべて開く」 ボタン
            $('#btn-show-all').on('click', function () {
                $loading.removeClass("is-hide");
                setTimeout(function () {
                    quarantineTable.rows().every(function () {
                        $loading.addClass("is-hide");
                        if (!this.child.isShown()) {
                            this.child(format(this.data())).show();
                            $(this.node()).addClass('shown');
                        }
                    });
                }, 1);
            });

            // 「すべて閉じる」 ボタン
            $('#btn-hide-all').on('click', function () {
                $loading.removeClass("is-hide");
                setTimeout(function () {
                    quarantineTable.rows().every(function () {
                        $loading.addClass("is-hide");
                        if (this.child.isShown()) {
                            this.child.hide();
                            $(this.node()).removeClass('shown');
                        }
                    });
                }, 1);
            });




        }).fail(function () {
            alert("データベースの読み込みエラーが発生しました。");
        });


    }, 1);

    quarantine2();
    inpatient();



    $(function () {
        var pagetop = $('#page_top');
        // ボタン非表示
        pagetop.hide();

        // 100px スクロールしたらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
});

$(window).on('load', function () {
    $('.loading_1').fadeOut();
});