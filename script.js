let ul = document.getElementsByTagName("ul")[0];
let input = document.getElementsByTagName("input")[0];

function add() {
  if (input.value != "") {
    ul.innerHTML += `<li>${input.value}</li>`;
    input.value = '';
  } else {
    input.placeholder = "Por favor, insira pelo menos uma letra";
  }
}
