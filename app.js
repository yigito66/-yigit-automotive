const carList = document.getElementById("carList");
const search = document.getElementById("search");

function show(data){
  carList.innerHTML = "";
  data.forEach(c => {
    carList.innerHTML += `
      <div class="card">
        <h2>${c.brand} ${c.model}</h2>
        <p>HP: ${c.hp}</p>
        <p>Max: ${c.topSpeed}</p>
      </div>
    `;
  });
}

show(cars);

search.addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  show(cars.filter(c =>
    c.brand.toLowerCase().includes(val) ||
    c.model.toLowerCase().includes(val)
  ));
});
