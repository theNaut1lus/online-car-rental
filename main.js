function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    // let data_array = JSON.parse(this.responseText);
    document.getElementById("preview").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

function fetchCarData(str) {
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    fetchedArray.forEach((element) => {
      console.log(element);
      let inject = `<div class="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%"
                                    fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                            <div class="card-body">
                                <p class="card-text">` + element["brand"] + ` <b>` + element["model"] + `</b> ` + element["year"] +`</p>
                                <p class="card-text">$` + element["price_per_day"] + ` Per Day</p>
                                  
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>`;
      document.getElementById("main-data").innerHTML += inject;
    });
    // let data_array = JSON.parse(this.responseText);
  };
  xmlhttp.open("GET", "read-cars.php?query=" + str);
  xmlhttp.send();
}

fetchCarData("all");
