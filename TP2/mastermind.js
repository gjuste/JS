var mastermind = function (){
  var temoin = [], result = [], proposition = [], wrong = null, right = null;
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
    for (var i = 1; i < 5; i++) {
      prop = $('#couleur div:nth-child('+i+')').attr('data-color');
      $('.validation').append('<div class="circleValidation"></div>');
      $('.circleValidation').css('backgroundColor', prop);
      proposition.push(prop);
      console.log(prop);
    }
    compare(proposition, temoin);

  }

  function compare(tab, tabRef) {
    wrong = 0, right = 0;
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        if (tabRef[i] === tab[j]) {
          if (i===j) {
            right++;
            tab[j] = null;
          }
        }
      }
      if (tab[i] != null) {
        wrong++;
      }
    }
  }

  return {
    init:init,
    colorEvent:colorEvent,
    validation:validation
  };

}();
