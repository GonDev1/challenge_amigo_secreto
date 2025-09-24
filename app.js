// Lista inicial de soldados
let soldierList = [];

// Referencias a elementos del DOM
const soldierInput = document.getElementById("soldado");
const listaSoldados = document.getElementById("listaSoldados");
const resultado = document.getElementById("resultado");

// Función para renderizar la lista en pantalla
function renderSoldierList() {
  listaSoldados.innerHTML = ""; // Limpia la lista

  soldierList.forEach((soldier) => {
    let li = document.createElement("li");
    li.textContent = soldier;
    listaSoldados.appendChild(li);
  });
}

// Función para añadir un soldado
function agregarSoldado() {
  let soldierName = soldierInput.value.trim();

  if (soldierName === "") {
    alert("Debe ingresar el nombre de un soldado");
    return;
  }

  // Validar duplicados
  if (soldierList.includes(soldierName)) {
    alert("Ese soldado ya está en la lista");
    return;
  }

  soldierList.push(soldierName);
  soldierInput.value = "";
  renderSoldierList();
}

// Función para sortear un soldado
function sortearSoldado() {
  if (soldierList.length === 0) {
    alert("No hay soldados en la lista para sortear");
    return;
  }

  let randomIndex = Math.floor(Math.random() * soldierList.length);
  let chosenSoldier = soldierList[randomIndex];

  resultado.innerHTML = ""; // Limpia el resultado previo
  let li = document.createElement("li");
  li.textContent = "El soldado secreto es: " + chosenSoldier;
  resultado.appendChild(li);
}

// Render inicial
renderSoldierList();