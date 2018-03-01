document.querySelector("button").addEventListener("click", function(){
  shuffle();
}, false);



function shuffle(){
  var tableau = document.getElementById('nb').value.split(',');
  var long = tableau.length;
    for (var i = 0; i < long; i++) {
      var num = Math.floor(Math.random() * long);
      var tmp = tableau[i];
      tableau[i] = tableau[num];
      tableau[num]=tmp;

    }
    document.getElementById('zone').innerHTML = tableau;
}

