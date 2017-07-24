function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;

  //your code goes here
  var storage = "";
  if (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
    str = str;
  }
  else {
    storage += str[0];
    str = str.substring(1);
    while (true) {
      if (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
        str = str;
        break;
      }
      else {
        storage += str[0];
        str = str.substring(1);
      }
    }
  }
  new_str = str + storage + "ay";

  //change the HTML content of a <p> element with id="pig-latin-word":
  document.getElementById("pig-latin-word").innerHTML = new_str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});
