function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    // let data_array = JSON.parse(this.responseText);
    document.getElementById("preview").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

fetchData("test");
