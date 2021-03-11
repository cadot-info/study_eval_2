const new_game = () => {
    //raz des compteurs + caché dé
    $('#imgde').hide()
    $('.total').text('0');
    $('.resultat-nombre').text('0');
}
var ROUND = [0, 0]
var GLOBAL = [0, 0]
const rollDice = () => {
    var positionx = [0, 0, -130, 100, -130, 100];
    var positiony = [0, 100, 100, 100, 0, 0];
    // on affiche le dé
    $('#imgde').show()
    var de = Math.floor((Math.random() * 6) + 1);
    $('#imgde').css('background-position-x', positionx[de - 1] + 'px').css('background-position-y', positiony[de - 1] + 'px')
    if (de != 1) {
        ROUND[1] += de;
        $($('.resultat-nombre')[0]).text(ROUND[1]);
    }
    else {
        ROUND[1] = 0;
        $($('.resultat-nombre')[0]).text(0);
    }

}
$('#imgde').show();