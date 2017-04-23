function save(){
    window.localStorage.setItem('nomeDoador', $('#nomeDoador').val());
    window.localStorage.setItem('dataNascimentoDoador', $('#dataNascimentoDoador').val());
    window.localStorage.setItem('enderecoDoador', $('#enderecoDoador').val());
    window.localStorage.setItem('telefoneDoador', $('#telefoneDoador').val());
    window.localStorage.setItem('cpfDoador', $('#cpfDoador').val());
    window.localStorage.setItem('emailDoador', $('#emailDoador').val());
    window.localStorage.setItem('loginDoador', $('#loginDoador').val());
    window.localStorage.setItem('fotoDoador', $('#fotoDoador').val());
}

function load(){
    $('#nomeMinhaConta').val(window.localStorage.getItem('nomeDoador'));
    $('#dataNascimentoMinhaConta').val(window.localStorage.getItem('datanascimentoDoador'));
    $('#enderecoMinhaConta').val(window.localStorage.getItem('enderecoDoador'));
    $('#telefoneMinhaConta').val(window.localStorage.getItem('telefoneDoador'));
    $('#cpfMinhaConta').val(window.localStorage.getItem('cpfDoador'));
    $('#emailMinhaConta').val(window.localStorage.getItem('emailDoador'));
    $('#loginMinhaConta').val(window.localStorage.getItem('loginDoador'));
    $('#fotoMinhaConta').val(window.localStorage.getItem('fotoDoador'));
}