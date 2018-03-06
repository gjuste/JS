var mastermind = function (){
  var temoin = [], result = [], proposition = [], right = null, trycount = 0;
  var valider = $('#valider');
  var couleur=['white','red','green','blue','yellow','orange'];

  function init (){
    definirTemoin();
  }

  function definirTemoin(){
    for (var i = 0; i < 4; i++) {
      var choixCouleur = Math.floor(Math.random() * (6 - 0 + 0)) + 0;
      temoin.push(couleur[choixCouleur]);
    }
    console.log(temoin);
  }

  function definirCouleur(t){
    if (t === 5) {
      t = 0;
    }
    else {
      t ++;
    }
    return t;
  }

  function colorEvent(event){
    var color = $(event.target).attr('data-color');
    var pos = definirCouleur($.inArray(color, couleur));
    $(event.target).attr('data-color',couleur[pos] );
    $(event.target).css('backgroundColor',couleur[pos] );
  }

  function validation(){
    var prop;
    proposition = [];
    result = [];
    trycount++;
    $('.validation').append('<div class="row" id="try'+trycount+'"><div class="col-3 trytext"><p>Essai n°'+trycount+'</p></div><div class="col-6 trycircle"></div><div class="col-3 result"><div class="circle_result"></div><div class="circle_result"></div><div class="circle_result"></div><div class="circle_result"></div></div></div>');
    for (var i = 1; i < 5; i++) {
      prop = $('#couleur div:nth-child('+i+')').attr('data-color');
      $('#try'+trycount+' .trycircle').append('<div class="circle circleValidation"></div>');
      $('#try'+trycount+' .trycircle div:nth-child('+i+')').css('backgroundColor', prop);
      proposition.push(prop);
    }
    compare(proposition, temoin);
    if (right === 4) {
      win();
    }
    else {
      for (var i = 1; i < right+1; i++) {
        $('#try'+trycount+' .result div:nth-child('+i+')').css('backgroundColor', 'white');
      }
    }

  }

  function compare(tab, tabRef) {
    right = 0;
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        if (tabRef[i] === tab[j]) {
          if (i===j) {
            right++;
            tab[j] = null;
          }
        }
      }
    }
  }

  function win() {
    var win_alert = ' tours !';
    if (trycount === 1) {
      win_alert = ' tour !';
    }
    alert('Vous avez gagné en '+ trycount + win_alert);
  }

  return {
    init:init,
    colorEvent:colorEvent,
    validation:validation
  };

}();
