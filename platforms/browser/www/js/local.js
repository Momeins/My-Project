function ajouter(){
  var produit = document.getElementById("prod").value;
  var qte = document.getElementById("qte").value;

  localStorage.setItem(produit,qte);

  document.getElementById("prod").value="";
  document.getElementById("qte").value="";
};

function modifier(){
  var produit = document.getElementById("prod").value;
  document.getElementById("qte").value = localStorage.getItem(produit);
};

function supprimer(){
  var produit = document.getElementById("prod").value;
  localStorage.removeItem(produit);
  document.getElementById("prod").value="";
  document.getElementById("qte").value="";
};

function doClear(){
  localStorage.clear();
};

function afficher (){
  var key ="";
  var paires = "<tr class='first'><td><b>Produit</b></td><td><b>Quantitée</b></td></tr>\n"; //sinon on peut metre \" pour échaper le "
  var i=0;

  for(i=0; i<=localStorage.length-1; i++){
    key = localStorage.key(i);
    paires += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>\n";
  }

  document.getElementById('paires').innerHTML = paires;
}
