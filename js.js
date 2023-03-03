let btnFilter = document.querySelector("#filter");
let div = document.querySelector(".card");
function showFilter() {
  document.getElementById("card").style.display = "block";
}
btnFilter.addEventListener("click", showFilter());
