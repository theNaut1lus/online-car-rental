function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    document.getElementById("txtHint").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

fetchData("test");
