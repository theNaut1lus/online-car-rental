<?php include 'header.php'; ?>
<?php $query = $_GET['query']; ?>
<div class="container-fluid pb-3">
    <div class="d-grid gap-3">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="search-data">
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>
<script>
    document.getElementById("search-data").onload(searchCarData("<?php echo $query ?>"));
</script>