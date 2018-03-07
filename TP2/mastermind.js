var mastermind = function (){
  var temoin, result, proposition, right, trycount, content, couleur = ['white','red','green','blue','yellow','orange'];

  function init (){
    temoin = [], result = [], proposition = [], right = null, trycount = 0, content = null;
    definirTemoin();
    $('#valider').prop('disabled', false);
  }

  function retry() {
    init();
    $('.circle').attr('data-color','white').css('backgroundColor','white');
    $('.validation').empty();
    $('.modal-body').empty();
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
    if (trycount < 10) {
      var prop;
      proposition = [];
      result = [];
      trycount++;
      $('.validation').append('<div class="row trycontainer" id="try'+trycount+'"><div class="col-3 trytext"><p>Essai n°'+trycount+'</p></div><div class="col-6 trycircle"></div><div class="col-3 result"><div class="circle_result"></div><div class="circle_result"></div><div class="circle_result"></div><div class="circle_result"></div></div></div>');
      for (var i = 1; i < 5; i++) {
        prop = $('#couleur div:nth-child('+i+')').attr('data-color');
        $('#try'+trycount+' .trycircle').append('<div class="circle circleValidation"></div>');
        $('#try'+trycount+' .trycircle div:nth-child('+i+')').css('backgroundColor', prop);
        proposition.push(prop);
      }
      compare(proposition, temoin);
      for (var i = 1; i < right+1; i++) {
        $('#try'+trycount+' .result div:nth-child('+i+')').css('backgroundColor', 'white');
      }
      if (right === 4) {
        win();
      }
    }
    else {
      loose();
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
    content = '<p>Vous avez gagné en '+ trycount + win_alert + '</p>';
    modal_show();
  }

  function loose() {
    var circle = $('#couleur').html();
    content = '<p>Désolé, vous avez malheuresement perdu. La bonne combinaison était :</p><div id="circle-end">'+ circle +'</div>';
    modal_show();
    for (var i = 1; i < 5; i++) {
      $('#circle-end div:nth-child('+i+')').css('backgroundColor', temoin[i-1]);
    }
  }

  function modal_show () {
    $('.modal-body').append(content);
    $('.modal').modal('show');
    $('#valider').prop('disabled', true);
  }

  return {
    init:init,
    colorEvent:colorEvent,
    validation:validation,
    retry:retry
  };

}();
