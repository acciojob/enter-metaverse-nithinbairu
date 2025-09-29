document.getElementById("enterBtn").addEventListener("click", () => {
  // Select the <p> element
  const pTag = document.getElementById("status");

  // Create <h1> element
  const h1Tag = document.createElement("h1");
  h1Tag.id = "statusHeading";           // keep the same id
  h1Tag.innerText = "Entered Metaverse";

  // Replace <p> with <h1>
  pTag.parentNode.replaceChild(h1Tag, pTag);
});