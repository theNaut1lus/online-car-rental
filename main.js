function fetchData(str) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    // let data_array = JSON.parse(this.responseText);
    document.getElementById("preview").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "read-json.php?query=" + str);
  xmlhttp.send();
}

// fetch all car data, search specific car data, AJAX and dumped to JSON

function fetchCarData(str) {
  console.log("fetching car data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("main-data").innerHTML = "";
    fetchedArray.forEach((element) => {
      // prettier-ignore
      let inject = `<div class="col"> 
                        <div class="card shadow-sm">
                            <img src="images/cars/` + element["img_index"] + `" class="card-img-top" alt="..." height="300">
                            <div class="card-body">
                                <p class="card-text">` + element["brand"] + ` <b>` + element["model"] + `</b> ` + element["year"] +`</p>
                                <p class="card-text fs-7"><b>$` + element["price_per_day"] + `</b> Per Day</p>
                                <small hidden>`+ element["id"] +`</small>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-primary" onclick="add_cart(`+ element["id"] +`)">Add to Cart</button>
                                    </div>
                                    <small class="text-body-secondary small-texts">1 day delivery</small>
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

function searchCarData(str) {
  console.log("searching car data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("main-data").innerHTML = "";
    fetchedArray.forEach((element) => {
      // prettier-ignore
      let inject = `<div class="col"> 
                        <div class="card shadow-sm">
                            <img src="images/cars/` + element["img_index"] + `" class="card-img-top" alt="..." height="300">
                            <div class="card-body">
                                <p class="card-text">` + element["brand"] + ` <b>` + element["model"] + `</b> ` + element["year"] +`</p>
                                <p class="card-text fs-7"><b>$` + element["price_per_day"] + `</b> Per Day</p>
                                  
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-primary" onclick="add_cart(`+ element["id"] +`)">Add to Cart</button>
                                    </div>
                                    <small class="text-body-secondary small-texts">1 day delivery</small>
                                </div>
                            </div>
                        </div>
                    </div>`;
      document.getElementById("main-data").innerHTML += inject;
    });
    // let data_array = JSON.parse(this.responseText);
  };
  xmlhttp.open("GET", "search-cars.php?query=" + str);
  xmlhttp.send();
}

// Cart AJAX Fetch, Update, Delete and Add then fetched from DB and dumped to JSON

function fetchCartData(str) {
  console.log("fetching cart data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("cart-data").innerHTML = "";
    fetchedArray.forEach((element) => {
      // prettier-ignore
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
  console.log(id_fetch, value);
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

function add_cart(id) {
  console.log("adding to cart " + id);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    console.log(this.responseText);
    fetchCartData("all");
  };
  xmlhttp.open("GET", "add-cart.php?query=" + id);
  xmlhttp.send();
  console.log(id);
}

function fetchBookingData(str) {
  console.log("fetching booking data");
  // str.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const fetchedArray = JSON.parse(this.responseText);
    document.getElementById("booking-data").innerHTML = "";
    fetchedArray.forEach((element) => {
      // prettier-ignore
      let inject = `<tr id="` + element["ID"] + `">
                      <td>` + element['car_details'] + `</td>
                      <td><input id='I_` + element["ID"] + `' type='number' value=\"` + element['days'] + `\" /></td>
                      <td>` + element['charges'] + `</td>
                      <td><button type="button" class="btn btn-primary" onclick="update_booking(` + element["ID"] + `)">Change Booking</button></td>
                      <td><button type="button" class="btn btn-secondary" onclick="delete_booking(` + element["ID"] + `)">Cancel Booking</button></td>
                    </tr>`;
      document.getElementById("booking-data").innerHTML += inject;
    });
    // let data_array = JSON.parse(this.responseText);
  };
  xmlhttp.open("GET", "booking-select.php?query=" + str);
  xmlhttp.send();
}

fetchBookingData("all");

function update_booking(id) {
  id_fetch = "I_" + id;
  value = document.getElementById(id_fetch).value;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    console.log(this.responseText);
    fetchBookingData("all");
  };
  xmlhttp.open("GET", "update-booking.php?query=" + id + "&value=" + value);
  xmlhttp.send();
  console.log(id_fetch, value);
}

function delete_booking(id) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    console.log(this.responseText);
    fetchBookingData("all");
  };
  xmlhttp.open("GET", "delete-booking.php?query=" + id);
  xmlhttp.send();
  console.log(id);
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
