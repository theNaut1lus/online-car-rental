<?php include 'cart-select.php' ?>

<?php include 'header.php'; ?>
<div class="container">
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Car Details</th>
                <th scope="col">Days to rent</th>
                <th scope="col">Total Charges</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($output_array as $key => $value) {
                echo "<tr>";
                echo "<td>" . $value['car_details'] . "</td>";
                echo "<td><input type='number' value=\"" . $value['days'] . "\"</></td>";
                echo "<td>" . $value['charges'] . "</td>";
                echo '<td><button type="button" class="btn btn-primary">Update</button></td>';
                echo '<td><button type="button" class="btn btn-secondary">Delete</button></td>';
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</div>
<?php include 'footer.php'; ?>