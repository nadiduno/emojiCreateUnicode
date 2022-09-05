async function emoji(){
  try{
    const response = await fetch ('./scr/DocNadi1.json');
  const body = await response.json();
  return body;
  } catch (err){
    console.log("Erro")
  } finally{
    console.log("Deu")
  }
}
emoji().then(body => {
  console.log(body);
  var emoji='';
  var long=body.length;
  for (var i=0;i<long;i++){
    var aux=body[i];
    emoji +="&#x"+aux;
    aux='';
  }
  document.querySelector(".emoji").innerHTML = emoji;
  var copyText = document.querySelector(".emoji");
  navigator.clipboard.querySelector();
});