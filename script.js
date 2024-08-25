function append() {
  const node = document.createElement("LI");
  const textnode = document.createTextNode("C#");
  node.appendChild(textnode);
  document.getElementById("languages").appendChild(node);
}
