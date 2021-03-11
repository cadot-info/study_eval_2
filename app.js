var ROUND = [0, 0]
var GLOBAL = [0, 0]
var gamer = 0
//function d'initialisation des variable
const init = () => {
    ROUND = [0, 0]
    GLOBAL = [0, 0]
    gamer = 0
}
//function de relancement du jeu
const new_game = () => {
    //raz des compteurs + caché dé
    $('#imgde').hide()
    $('.total').text('0');
    $('.resultat-nombre').text('0');
    $('#point0').show();
    $('#point1').hide();
    $($('.joueur')[0]).css('font-weight', 700);
    $($('.joueur')[1]).css('font-weight', 200);

    init();
}
//function lancé le dé
//un petit délire de déplacement du background plutôt que charger 6 images
const rollDice = () => {
    var positionx = [0, 0, -131, 100, -131, 100];
    var positiony = [0, 100, 100, 100, 0, 0];
    // on affiche le dé
    $('#imgde').show()
    var de = Math.floor((Math.random() * 6) + 1);
    $('#imgde').css('background-position-x', positionx[de - 1] + 'px').css('background-position-y', positiony[de - 1] + 'px')
    if (de != 1) {
        ROUND[gamer] += de;
        $($('.resultat-nombre')[gamer]).text(ROUND[gamer]);
    }
    else {
        ROUND[gamer] = 0;
        $($('.resultat-nombre')[gamer]).text(0);
        changement()
    }
}
//function sauvegarde
const hold = () => {
    GLOBAL[gamer] += ROUND[gamer]
    ROUND[gamer] = 0;
    $($('.resultat-nombre')[gamer]).text(ROUND[gamer]);
    $($('.total')[gamer]).text(GLOBAL[gamer]);
    //record battu?
    if (GLOBAL[gamer] >= 100)
        alert('Le joueur ' + (gamer + 1) + ' à gagné!!');
    changement()
}
$('#imgde').show();

const changement = () => {
    //changement de joueur
    if (gamer == 0) {
        gamer = 1;
        $('#point1').show();
        $('#point0').hide();
        $($('.joueur')[1]).css('font-weight', 700);
        $($('.joueur')[0]).css('font-weight', 200);
    }
    else {
        gamer = 0;
        $('#point0').show();
        $('#point1').hide();
        $($('.joueur')[1]).css('font-weight', 200);
        $($('.joueur')[0]).css('font-weight', 700);
    }

}