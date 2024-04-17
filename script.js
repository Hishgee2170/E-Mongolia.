const unemleh = document.getElementById("darah");
let budegruulegch = document.getElementById("budgeruulegch");

let hide = document.getElementById("tomUnemleh");
unemleh.addEventListener("click", () => {
  hide.style.display = "flex";
  budegruulegch.style.display = "";
});
hide.addEventListener("click", () => {
  hide.style.display = "none";
  budegruulegch.style.display = "none";
});
