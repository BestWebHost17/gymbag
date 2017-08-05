


var guysLink;
var girlsLink;

var guys;
var girls;


function hideGirls() {

  guysLink = document.getElementById('guysLink');
  guysLink.setAttribute('style', 'color: #009245;');

  girlsLink = document.getElementById('girlsLink');
  girlsLink.setAttribute('style', 'color: inherit;');

  girls = document.getElementsByClassName('girls');
    for (var i = 0; i < girls.length; i++) {
      girls[i].setAttribute('style', 'display: none');
    }


  guys = document.getElementsByClassName('guys');
    for (var i = 0; i < girls.length; i++) {
      guys[i].setAttribute('style', 'display: block');
    }
}

function hideGuys(){

  girlsLink = document.getElementById('girlsLink');
  girlsLink.setAttribute('style', 'color: #009245;');

  guysLink = document.getElementById('guysLink');
  guysLink.setAttribute('style', 'color: inherit;');

  girls = document.getElementsByClassName('girls');
    for (var i = 0; i < girls.length; i++) {
      girls[i].setAttribute('style', 'display: block');
    }


  guys = document.getElementsByClassName('guys');
    for (var i = 0; i < girls.length; i++) {
      guys[i].setAttribute('style', 'display: none');
    }
}
