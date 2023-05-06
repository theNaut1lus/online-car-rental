<?php include 'cart-select.php'; ?>

<?php
$discount = -5;
$final = $total + $discount;
?>

<div class="col-md-5 col-lg-4 order-md-last">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill">3</span>
    </h4>
    <ul class="list-group mb-3">
        <?php
        foreach ($output_array as $key => $value) {
            echo '
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 class="my-0">' . $value["car_details"] . '</h6>
                        <small class="text-body-secondary">Days: ' . $value["days"] . '</small>
                    </div>
                    <span class="text-body-secondary">$' . $value["charges"] . '</span>
                </li>';
        }
        ?>
        <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">
                <?php echo $discount ?>
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span>Total (AUD)</span>
            <strong>
                $
                <?php echo $final ?>
            </strong>
        </li>
    </ul>

    <form class="card p-2">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
    </form>
</div>