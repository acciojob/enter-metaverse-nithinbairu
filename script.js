//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click",()=>{
	pTag=document.getElementById("status");
	h1Tag=document.createElement("h1");
	h1Tag.id=pTag.id;
	h1Tag.innerText="Entered Metaverse";
	pTag.parentNode.replaceChild(h1Tag,pTag);
})