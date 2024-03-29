<?php
include('connection.php');
session_start();
if (!$_SESSION["username"]) {
    header('Location: signin.php');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Extract form data
    $category = mysqli_real_escape_string($conn, $_POST['categoryName']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);

    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $name = $_FILES['image']['name'];
        $type = $_FILES['image']['type'];
        $data = mysqli_real_escape_string($conn, file_get_contents($_FILES['image']['tmp_name']));

        // Use prepared statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO `categories`(`Name`, `Description`, `cat_img`) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $category, $description, $data);
        $queryRun = $stmt->execute();

        if ($queryRun) {
            echo '<div class="alert alert-success" role="alert">
                New Category Successfully Added
            </div>';

            echo '<script>
                setTimeout(function(){
                    window.location.href = "index.php";
                }, 3000);
            </script>';

            // Exit the script to prevent further execution
            exit();
        } else {
            echo "Something went wrong, try again or contact admin";
        }

        $stmt->close();
    } else echo "image not processed";
}



?>





<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from 111.68.112.228:443/public/form-controls.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Nov 2023 00:42:47 GMT -->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Add New Category</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta property="og:url" content="http://demo.madebytilde.com/elephant">
    <meta property="og:type" content="website">
    <meta property="og:title" content="The fastest way to build Modern Admin APPS for any platform, browser, or device.">
    <meta property="og:description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta property="og:image" content="../../demo.madebytilde.com/elephant.html">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@madebytilde">
    <meta name="twitter:creator" content="@madebytilde">
    <meta name="twitter:title" content="The fastest way to build Modern Admin APPS for any platform, browser, or device.">
    <meta name="twitter:description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta name="twitter:image" content="../../demo.madebytilde.com/elephant.html">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#d9230f">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700">
    <link rel="stylesheet" href="css/vendor.min.css">
    <link rel="stylesheet" href="css/elephant.min.css">
    <link rel="stylesheet" href="css/application.min.css">
    <link rel="stylesheet" href="css/demo.min.css">
</head>

<body class="layout layout-header-fixed">
    <?php include "topnav.php"; ?>
    <div class="layout-main">

 <div class="backarrow">
    <a href="index.php">
                <img src="assets/img/banner/left-arrow-icon.png" 
                class="Home Button" 
                alt="home button"
                width="30px"
                style="margin-left: 100px; margin-top: 30px;">
            </a>
            </div>

        <div class="layout-content">
           
            <div class="layout-content-body">
                <div class="title-bar">
                    <h1 class="title-bar-title">
                        <span class="d-ib">Add New Category</span>

                    </h1>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="demo-form-wrapper">
                            <form class="form form-horizontal" method="POST" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" for="form-control-1">Category Name</label>
                                    <div class="col-sm-9">
                                        <input id="form-control-1" class="form-control" type="text" name="categoryName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" for="form-control-8">Category Description</label>
                                    <div class="col-sm-9">
                                        <textarea id="form-control-8" class="form-control" rows="3" name="description"></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label" for="form-control-8">Category Image</label>
                                    <div class="col-sm-9">
                                        <input type="file" name="image" id="image" accept="image/*" required>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label" for="form-control-8"></label>
                                    <div class="col-sm-9">
                                        <button type="submit" name="save_data" class="btn btn-primary btn-block">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



</body>

<!-- Mirrored from 111.68.112.228:443/public/form-controls.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Nov 2023 00:42:47 GMT -->

</html>