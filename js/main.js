


var guysLink;
var girlsLink;

var guys;
var girls;


function hideGirls() {

  guysLink = document.getElementById('guysLink');
  guysLink.setAttribute('style', 'color: #009245;');

  girlsLink = document.getElementById('girlsLink');
  girlsLink.setAttribute('style', 'color: inherit;');

console.log(56);
  girls = document.getElementById('girls');
      girls.setAttribute('style', 'display: none');
console.log(57);
  guys = document.getElementById('guys');
      guys.setAttribute('style', 'display: block');
console.log(58);
}

function hideGuys(){

  girlsLink = document.getElementById('girlsLink');
  girlsLink.setAttribute('style', 'color: #009245;');

  guysLink = document.getElementById('guysLink');
  guysLink.setAttribute('style', 'color: inherit;');

  girls = document.getElementById('girls');
      girls.setAttribute('style', 'display: block');


  guys = document.getElementById('guys');
      guys.setAttribute('style', 'display: none');
}
