window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enterBtn").addEventListener("click", () => {
    let pTag = document.getElementById("status");
    let h1Tag = document.createElement("h1");
    h1Tag.id = pTag.id;
    h1Tag.innerText = "Entered Metaverse";
    pTag.parentNode.replaceChild(h1Tag, pTag);
  });
});