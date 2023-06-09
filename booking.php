<?php include 'header.php'; ?>
<div class="container">
    <div class="row">
        <h4 class="display-4 page-headings">Current Bookings</h4>
    </div>
    <div class="row">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Car Details</th>
                    <th scope="col">Days to rent</th>
                    <th scope="col">Total Charges</th>
                </tr>
            </thead>
            <tbody id="booking-data">
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col">
            <a href="index.php" type="button" class="btn btn-success">Another booking</a>
        </div>
        <div class="col">
            <button type="button" class="btn btn-danger">Cancel all Bookings</button>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>