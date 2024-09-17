function changeReadMore() {
  const btn = document.getElementById("btnId");
  const addInfo = document.getElementById("addInfoId");

  if (addInfo.style.display === "none" || addInfo.style.display === "") {
    addInfo.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    addInfo.style.display = "none";
    btn.textContent = "Read More";
  }
}
