const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const result = document.getElementById("result");

cars.forEach(c => {
  c1.innerHTML += `<option value="${c.id}">${c.brand} ${c.model}</option>`;
  c2.innerHTML += `<option value="${c.id}">${c.brand} ${c.model}</option>`;
});

function compare(){
  const a = cars.find(x => x.id == c1.value);
  const b = cars.find(x => x.id == c2.value);

  result.innerHTML = `
    <h2>${a.brand} vs ${b.brand}</h2>
    <p>HP: ${a.hp} vs ${b.hp}</p>
    <p>Max: ${a.topSpeed} vs ${b.topSpeed}</p>
  `;
}
