let inputtext = document.getElementById("input1");
let textarea = document.getElementById("textareaname");
let btnadd = document.getElementById("btnaddnote");
let addtotext = document.querySelector(".addtotext");

btnadd.addEventListener("click", () => {
  if (inputtext.value.length >= 1 && textarea.value.length >= 1) {
    let h3 = document.createElement("h1");
    h3.appendChild(document.createTextNode(inputtext.value));
    let textP = document.createElement("p");
    textP.appendChild(document.createTextNode(textarea.value));

    let btndelete = document.createElement("button");
    btndelete.appendChild(document.createTextNode("DeleteNote"));
    let mytt = document.createAttribute("class");
    mytt.value = "btn1";
    btndelete.setAttributeNode(mytt);

    let btnEdite = document.createElement("button");
    btnEdite.appendChild(document.createTextNode("Edite Note"));
    let mytt2 = document.createAttribute("class");
    mytt2.value = "btn2";
    btnEdite.setAttributeNode(mytt2);


  }
});
