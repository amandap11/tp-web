$(function(){
    $("#tabelaExtratoDoador input").keyup(function(){       
        var index = $(this).parent().index();
        var nth = "#tabelaExtratoDoador td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("#tabelaExtratoDoador tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#tabelaExtratoDoador input").blur(function(){
        $(this).val("");
    });
});