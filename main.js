function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    // let data_array = JSON.parse(this.responseText);
    document.getElementById("preview").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

function dumpToJson(data) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], { type: "application/json" });
  console.log(blob);
}

function fetchCarData(str) {
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    fetchedArray.forEach((element) => {
      dumpToJson(element);
      let inject = `<div class="col">
                        <div class="card shadow-sm">
                            <img src="images/cars/` + element["img_index"] + `" class="card-img-top" alt="..." height="300">
                            <div class="card-body">
                                <p class="card-text">` + element["brand"] + ` <b>` + element["model"] + `</b> ` + element["year"] +`</p>
                                <p class="card-text">$` + element["price_per_day"] + ` Per Day</p>
                                  
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-primary">Add to Cart</button>
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

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
