$(function(){
    $("#tabelaTroca input").keyup(function(){       
        var index = $(this).parent().index();
        var nth = "#tabelaTroca td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("#tabelaTroca tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#tabelaTroca input").blur(function(){
        $(this).val("");
    });
});