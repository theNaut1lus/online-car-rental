function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    // let data_array = JSON.parse(this.responseText);
    document.getElementById("preview").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

function update_cart(id) {
  id_fetch = "I_" + id;
  value = document.getElementById(id_fetch).value;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    console.log(this.responseText);
    fetchCartData("all");
  };
  xmlhttp.open("GET", "update-cart.php?query=" + id + "&value=" + value);
  xmlhttp.send();
  console.log(id_fetch,value);
}

function delete_cart(id) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    console.log(this.responseText);
    fetchCartData("all");
  };
  xmlhttp.open("GET", "delete-cart.php?query=" + id);
  xmlhttp.send();
  console.log(id);
}

function fetchCarData(str) {
  console.log("fetching car data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("main-data").innerHTML = "";
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

function fetchCartData(str) {
  console.log("fetching cart data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("cart-data").innerHTML = "";
    fetchedArray.forEach((element) => {
      let inject = `<tr id="` + element["ID"] + `">
                      <td>` + element['car_details'] + `</td>
                      <td><input id='I_` + element["ID"] + `' type='number' value=\"` + element['days'] + `\" /></td>
                      <td>` + element['charges'] + `</td>
                      <td><button type="button" class="btn btn-primary" onclick="update_cart(` + element["ID"] + `)">Update</button></td>
                      <td><button type="button" class="btn btn-secondary" onclick="delete_cart(` + element["ID"] + `)">Delete</button></td>
                    </tr>`;
      document.getElementById("cart-data").innerHTML += inject;
    });
    // let data_array = JSON.parse(this.responseText);
  };
  xmlhttp.open("GET", "cart-select.php?query=" + str);
  xmlhttp.send();
}

fetchCartData("all");

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
