const url = 'https://blockchain.info/ticker';

      // A L'ANCIENNE //
// function recupererPrix(){
//    let requete = new XMLHttpRequest();
//     requete.open('GET', url);
//     requete.responseType = 'json';
//     requete.send();


//     requete.onload = function(){
//     if(requete.readyState === XMLHttpRequest.DONE){
//       if(requete.status === 200){
//         let reponse = requete.response;
//         let prixEnEuros = reponse.EUR.last;
//         document.querySelector('#price_label').textContent = prixEnEuros;
//       }
//     }
//   }
// }
// setInterval(recupererPrix, 5000);

async function recupererPrix() {
  const requete = await fetch(url, {
    method: 'GET'
  });
  if(!requete.ok){
    alert('un problème est survenu.');
  }
else{
  let donnees = await requete.json();
  document.querySelector('span').textContent = donnees.EUR.last;
}
}

setInterval(recupererPrix, 5000);


