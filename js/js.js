/**
 * Created by Edouard on 30/11/2018.
 */


$(document).ready(function(){
    ecran=$('#ecran'),signe=false,valeur=0;
    $('#un').click(function () {
        efface();
        ecran.val(ecran.val()+'1')
        signF()
    })
    $('#deux').click(function () {
        efface();
        ecran.val(ecran.val()+'2')
        signF()
    })
    $('#trois').click(function () {
        efface();
        ecran.val(ecran.val()+'3')
        signF()
    })
    $('#quatre').click(function () {
        efface();
        ecran.val(ecran.val()+'4')
        signF()
    })
    $('#cinq').click(function () {
        efface();
        ecran.val(ecran.val()+'5')
        signF()
    })
    $('#six').click(function () {
        efface();
        ecran.val(ecran.val()+'6')
        signF()
    })
    $('#sept').click(function () {
        efface();
        ecran.val(ecran.val()+'7')
        signF()
    })
    $('#huit').click(function () {
        efface();
        ecran.val(ecran.val()+'8')
        signF()
    })
    $('#neuf').click(function () {
        efface();
        ecran.val(ecran.val()+'9')
        signF()
    })
    $('#zero').click(function () {
        efface();
        ecran.val(ecran.val()+'0')
        signF()
    })
    $('#sup').click(function () {
        i=ecran.val().length-1;
        ecran.val(ecran.val().substring(0,i))
    })

    $('#plus').click(function () {
        signe=true;
        valeur=valeur+Number(ecran.val())
        ecran.val(valeur)
        valeur=0;
    })

function efface() {
    if (signe){
        valeur=Number(ecran.val());
        ecran.val('')}
}

    function signF() {
        signe=false
    }

});