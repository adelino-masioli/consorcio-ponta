(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);




//select dates
function enableMes(mes){
    resetBg();
    //janeiro
    if(mes == 'j1'){
        $('.day[data-date="1546819200000"]').addClass('actvencimento');
        $('.day[data-date="1547251200000"]').addClass('actsorteio');
        $('.day[data-date="1547596800000"]').addClass('actassembleia');
        $('.day[data-date="1547510400000"]').addClass('actlimitelance');
    }
    if(mes == 'j2'){
        $('.day[data-date="1547078400000"]').addClass('actvencimento');
        $('.day[data-date="1547251200000"]').addClass('actsorteio');
        $('.day[data-date="1547596800000"]').addClass('actassembleia');
        $('.day[data-date="1547510400000"]').addClass('actlimitelance');
    }
    //fevereiro
    if(mes == 'f1'){
        $('.day[data-date="1549324800000"]').addClass('actvencimento');
        $('.day[data-date="1549670400000"]').addClass('actsorteio');
        $('.day[data-date="1550016000000"]').addClass('actassembleia');
        $('.day[data-date="1549929600000"]').addClass('actlimitelance');
    }
    if(mes == 'f2'){
        $('.day[data-date="1549843200000"]').addClass('actvencimento');
        $('.day[data-date="1550275200000"]').addClass('actsorteio');
        $('.day[data-date="1550620800000"]').addClass('actassembleia');
        $('.day[data-date="1550534400000"]').addClass('actlimitelance');
    }
    //marco
    if(mes == 'm1'){
        $('.day[data-date="1551744000000"]').addClass('actvencimento');
        $('.day[data-date="1552089600000"]').addClass('actsorteio');
        $('.day[data-date="1552435200000"]').addClass('actassembleia');
        $('.day[data-date="1552348800000"]').addClass('actlimitelance');
    }
    if(mes == 'm2'){
        $('.day[data-date="1552262400000"]').addClass('actvencimento');
        $('.day[data-date="1552694400000"]').addClass('actsorteio');
        $('.day[data-date="1553040000000"]').addClass('actassembleia');
        $('.day[data-date="1552953600000"]').addClass('actlimitelance');
    }
    //abril
    if(mes == 'a1'){
        $('.day[data-date="1554422400000"]').addClass('actvencimento');
        $('.day[data-date="1554508800000"]').addClass('actsorteio');
        $('.day[data-date="1554854400000"]').addClass('actassembleia');
        $('.day[data-date="1554768000000"]').addClass('actlimitelance');
    }
    if(mes == 'a2'){
        $('.day[data-date="1554854400000"]').addClass('actvencimento');
        $('.day[data-date="1555113600000"]').addClass('actsorteio');
        $('.day[data-date="1555459200000"]').addClass('actassembleia');
        $('.day[data-date="1555372800000"]').addClass('actlimitelance');
    }
    //maio
    if(mes == 'mm1'){
        $('.day[data-date="1557100800000"]').addClass('actvencimento');
        $('.day[data-date="1557532800000"]').addClass('actsorteio');
        $('.day[data-date="1557878400000"]').addClass('actassembleia');
        $('.day[data-date="1557792000000"]').addClass('actlimitelance');
    }
    if(mes == 'mm2'){
        $('.day[data-date="1557446400000"]').addClass('actvencimento');
        $('.day[data-date="1557532800000"]').addClass('actsorteio');
        $('.day[data-date="1557878400000"]').addClass('actassembleia');
        $('.day[data-date="1557792000000"]').addClass('actlimitelance');
    }
    //junho
    if(mes == 'jn1'){
        $('.day[data-date="1559692800000"]').addClass('actvencimento');
        $('.day[data-date="1559952000000"]').addClass('actsorteio');
        $('.day[data-date="1560297600000"]').addClass('actassembleia');
        $('.day[data-date="1560211200000"]').addClass('actlimitelance');
    }
    if(mes == 'jn2'){
        $('.day[data-date="1560124800000"]').addClass('actvencimento');
        $('.day[data-date="1560556800000"]').addClass('actsorteio');
        $('.day[data-date="1560902400000"]').addClass('actassembleia');
        $('.day[data-date="1560816000000"]').addClass('actlimitelance');
    }
    //julho
    if(mes == 'jl1'){
        $('.day[data-date="1562284800000"]').addClass('actvencimento');
        $('.day[data-date="1562371200000"]').addClass('actsorteio');
        $('.day[data-date="1562716800000"]').addClass('actassembleia');
        $('.day[data-date="1562630400000"]').addClass('actlimitelance');
    }
    if(mes == 'jl2'){
        $('.day[data-date="1562716800000"]').addClass('actvencimento');
        $('.day[data-date="1562976000000"]').addClass('actsorteio');
        $('.day[data-date="1563321600000"]').addClass('actassembleia');
        $('.day[data-date="1563235200000"]').addClass('actlimitelance');
    }
    //agosto
    if(mes == 'ag1'){
        $('.day[data-date="1564963200000"]').addClass('actvencimento');
        $('.day[data-date="1565395200000"]').addClass('actsorteio');
        $('.day[data-date="1565740800000"]').addClass('actassembleia');
        $('.day[data-date="1565654400000"]').addClass('actlimitelance');
    }
    if(mes == 'ag2'){
        $('.day[data-date="1565568000000"]').addClass('actvencimento');
        $('.day[data-date="1566000000000"]').addClass('actsorteio');
        $('.day[data-date="1566345600000"]').addClass('actassembleia');
        $('.day[data-date="1566259200000"]').addClass('actlimitelance');
    }
    //setembro
    if(mes == 's1'){
        $('.day[data-date="1568073600000"]').addClass('actvencimento');
        $('.day[data-date="1568160000000"]').addClass('actsorteio');
        $('.day[data-date="1568246400000"]').addClass('actassembleia');
        $('.day[data-date="1536624000000"]').addClass('actlimitelance');
    }
    if(mes == 's2'){
        $('.day[data-date="1568073600000"]').addClass('actvencimento');
        $('.day[data-date="1568160000000"]').addClass('actsorteio');
        $('.day[data-date="1568246400000"]').addClass('actassembleia');
        $('.day[data-date="1537228800000"]').addClass('actlimitelance');
    }
    //outubro
    if(mes == 'o1'){
        $('.day[data-date="1570406400000"]').addClass('actvencimento');
        $('.day[data-date="1570579200000"]').addClass('actsorteio');
        $('.day[data-date="1570665600000"]').addClass('actassembleia');
        $('.day[data-date="1539043200000"]').addClass('actlimitelance');
    }
    if(mes == 'o2'){
        $('.day[data-date="1570665600000"]').addClass('actvencimento');
        $('.day[data-date="1571184000000"]').addClass('actsorteio');
        $('.day[data-date="1571270400000"]').addClass('actassembleia');
        $('.day[data-date="1539648000000"]').addClass('actlimitelance');
    }
    //novembro
    if(mes == 'n1'){
        $('.day[data-date="1572912000000"]').addClass('actvencimento');
        $('.day[data-date="1573257600000"]').addClass('actsorteio');
        $('.day[data-date="1573603200000"]').addClass('actassembleia');
        $('.day[data-date="1573516800000"]').addClass('actlimitelance');
    }
    if(mes == 'n2'){
        $('.day[data-date="1573430400000"]').addClass('actvencimento');
        $('.day[data-date="1573862400000"]').addClass('actsorteio');
        $('.day[data-date="1574208000000"]').addClass('actassembleia');
        $('.day[data-date="1574121600000"]').addClass('actlimitelance');
    }
    //dezembro
    if(mes == 'd1'){
        $('.day[data-date="1575504000000"]').addClass('actvencimento');
        $('.day[data-date="1575676800000"]').addClass('actsorteio');
        $('.day[data-date="1576022400000"]').addClass('actassembleia');
        $('.day[data-date="1575936000000"]').addClass('actlimitelance');
    }
    if(mes == 'd2'){
        $('.day[data-date="1575936000000"]').addClass('actvencimento');
        $('.day[data-date="1576281600000"]').addClass('actsorteio');
        $('.day[data-date="1576627200000"]').addClass('actassembleia');
        $('.day[data-date="1576540800000"]').addClass('actlimitelance');
    }
}
function resetBg(){
    $('.day').removeClass('actvencimento');
    $('.day').removeClass('actsorteio');
    $('.day').removeClass('actlimitelance');
    $('.day').removeClass('actassembleia');
    $('.day').removeClass('actferiado');
    $('.day').removeClass('actsorteioponta');
}


jQuery(document).ready(function(){
    var d = new Date();
    var mes = d.getMonth();

    $('.mes').hide();
    if(mes == 0){
        $('.mes1').show();
        setTimeout(function(){
            enableMes('j1');
        },400);
    }
    if(mes == 1){
        $('.mes2').show();
        setTimeout(function(){
            enableMes('f1');
        },400);
    }
    if(mes == 2){
        $('.mes3').show();
        setTimeout(function(){
            enableMes('m1');
        },400);
    }
    if(mes == 3){
        $('.mes4').show();
        setTimeout(function(){
            enableMes('a1');
        },400);
    }
    if(mes == 4){
        $('.mes5').show();
        setTimeout(function(){
            enableMes('mm1');
        },400);
    }
    if(mes == 5){
        $('.mes6').show();
        setTimeout(function(){
            enableMes('jn1');
        },400);
    }
    if(mes == 6){
        $('.mes7').show();
        setTimeout(function(){
            enableMes('jl1');
        },400);
    }
    if(mes == 7){
        $('.mes8').show();
        setTimeout(function(){
            enableMes('ag1');
        },400);
    }
    if(mes == 8){
        $('.mes9').show();
        setTimeout(function(){
            enableMes('s1');
        },400);
    }
    if(mes == 9){
        $('.mes10').show();
        setTimeout(function(){
            enableMes('o1');
        },400);
    }
    if(mes == 10){
        $('.mes11').show();
        setTimeout(function(){
            enableMes('n1');
        },400);
    }
    if(mes == 11){
        $('.mes12').show();
        setTimeout(function(){
            enableMes('d1');
        },400);
    }
});

function selecionaCalendario(mes){
    //console.log(mes);
    $('.mes').hide();
    if(mes == '1546732800000' || mes == '1548547200000'){
        $('.mes1').show();
        setTimeout(function(){
            enableMes('j1');
        },400);
    }
    if(mes == '1549756800000' || mes == '1550966400000'){
        $('.mes2').show();
        setTimeout(function(){
            enableMes('f1');
        },400);
    }
    if(mes == '1552176000000' || mes == '1553990400000'){
        $('.mes3').show();
        setTimeout(function(){
            enableMes('m1');
        },400);
    }
    if(mes == '1554595200000' || mes == '1556409600000'){
        $('.mes4').show();
        setTimeout(function(){
            enableMes('a1');
        },400);
    }
    if(mes == '1557619200000' || mes == '1558828800000'){
        $('.mes5').show();
        setTimeout(function(){
            enableMes('mm1');
        },400);
    }
    if(mes == '1560038400000' || mes == '1561852800000'){
        $('.mes6').show();
        setTimeout(function(){
            enableMes('jn1');
        },400);
    }
    if(mes == '1562457600000' || mes == '1564272000000'){
        $('.mes7').show();
        setTimeout(function(){
            enableMes('jl1');
        },400);
    }
    if(mes == '1565481600000' || mes == '1566691200000'){
        $('.mes8').show();
        setTimeout(function(){
            enableMes('ag1');
        },400);
    }
    if(mes == '1567900800000' || mes == '1569715200000'){
        $('.mes9').show();
        setTimeout(function(){
            enableMes('s1');
        },400);
    }
    if(mes == '1570320000000' || mes == '1572134400000'){
        $('.mes10').show();
        setTimeout(function(){
            enableMes('o1');
        },400);
    }
    if(mes == '1573344000000' || mes == '1574553600000'){
        $('.mes11').show();
        setTimeout(function(){
            enableMes('n1');
        },400);
    }
    if(mes == '1575763200000' || mes == '1577577600000'){
        $('.mes12').show();
        setTimeout(function(){
            enableMes('d1');
        },400);
    }
}

function clicktable(){
    $('#datetimepicker12').datepicker('update');
}

$(function () {
    $('#datetimepicker12').datepicker({ language: "pt-BR"}).on('changeDate', function(e) {
        //janeiro
        if(e.date.getMonth() == 12 && e.date.getDate() == 5){
            $('.day[data-date="1515110400000"]').addClass('actvencimento');
            $('.day[data-date="1504915200000"]').addClass('actsorteio');
            $('.day[data-date="1505260800000"]').addClass('actassembleia');
        }
        //setembro
        if(e.date.getMonth() == 8 && e.date.getDate() == 5){
            $('.day[data-date="1504569600000"]').addClass('actvencimento');
            $('.day[data-date="1504915200000"]').addClass('actsorteio');
            $('.day[data-date="1505260800000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 8 && e.date.getDate() == 11){
            $('.day[data-date="1505088000000"]').addClass('actvencimento');
            $('.day[data-date="1505520000000"]').addClass('actsorteio');
            $('.day[data-date="1505865600000"]').addClass('actassembleia');
        }
        //outubro
        if(e.date.getMonth() == 9 && e.date.getDate() == 5){
            $('.day[data-date="1507161600000"]').addClass('actvencimento');
            $('.day[data-date="1507334400000"]').addClass('actsorteio');
            $('.day[data-date="1507680000000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 9 && e.date.getDate() == 10){
            $('.day[data-date="1507593600000"]').addClass('actvencimento');
            $('.day[data-date="1507939200000"]').addClass('actsorteio');
            $('.day[data-date="1508284800000"]').addClass('actassembleia');
        }
        //novembro
        if(e.date.getMonth() == 10 && e.date.getDate() == 6){
            $('.day[data-date="1509926400000"]').addClass('actvencimento');
            $('.day[data-date="1510358400000"]').addClass('actsorteio');
            $('.day[data-date="1510790400000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 10 && e.date.getDate() == 10){
            $('.day[data-date="1510272000000"]').addClass('actvencimento');
            $('.day[data-date="1510963200000"]').addClass('actsorteio');
            $('.day[data-date="1511308800000"]').addClass('actassembleia');
        }
        //dezembro
        if(e.date.getMonth() == 11 && e.date.getDate() == 5){
            $('.day[data-date="1512432000000"]').addClass('actvencimento');
            $('.day[data-date="1512777600000"]').addClass('actsorteio');
            $('.day[data-date="1513123200000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 11 && e.date.getDate() == 11){
            $('.day[data-date="1512950400000"]').addClass('actvencimento');
            $('.day[data-date="1513382400000"]').addClass('actsorteio');
            $('.day[data-date="1513728000000"]').addClass('actassembleia');
        }
    });
});

jQuery(document).ready(function(){
    jQuery('#edtGrupo').blur(function(){
        var grupo = jQuery('#edtGrupo').val();
        var tam = grupo.length;

        switch (tam){
            case 1:
                jQuery('#edtGrupo').val('00000'+grupo);
                break;
            //
            case 2:
                jQuery('#edtGrupo').val('0000'+grupo);
                break;
            //
            case 3:
                jQuery('#edtGrupo').val('000'+grupo);
                break;
            //
            case 4:
                jQuery('#edtGrupo').val('00'+grupo);
                break;
            //
            case 5:
                jQuery('#edtGrupo').val('0'+grupo);
                break;
            //
            case 6:
                jQuery('#edtGrupo').val(grupo);
                break;

        }
    });
});
jQuery(document).ready(function(){
    jQuery('#edtCota').blur(function(){
        var cota = jQuery('#edtCota').val();
        var tam = cota.length;

        switch (tam){
            case 1:
                jQuery('#edtCota').val('000'+cota);
                break;
            //
            case 2:
                jQuery('#edtCota').val('00'+cota);
                break;
            //
            case 3:
                jQuery('#edtCota').val('0'+cota);
                break;
            //
            case 4:
                jQuery('#edtCota').val(cota);
                break;
            //
        }
    });
});