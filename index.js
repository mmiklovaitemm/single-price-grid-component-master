// Atidaro modal langą
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// Uždaro modal langą
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Uždaro modal spustelėjus už jo ribų
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
