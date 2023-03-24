<template>
    <!-- bootstrap Icon -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <header>
    <div class="wrapper sticky-top">
        <nav class="navbar navbar-dark navbar-expand-lg" style="background-color:#3664F4 ;">
            <div class="container-fluid sticky-top">
                <a class="navbar-brand" href="#">
                    <span><img src="../assets/images/snapsvg-logo.png" alt="logo" width="52px" ></span>
                    <span class="h1 text-warning px-2">Modern Furnitures</span>
                </a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="menu collapse navbar-collapse sticky-top" id="navbar">
                    <!-- collapes = display-none -->
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item text-white"><span class="nav-link"><RouterLink to="/"><span>Home</span></RouterLink></span></li>
                        <li class="nav-item "><span class="nav-link"><RouterLink to="/about"><span>About</span></RouterLink></span></li>
                        <li class="nav-item "><span class="nav-link"><RouterLink to="/product"><span>Product</span></RouterLink></span></li>
                    </ul>
                    <form class="d-flex" role="search">
                        <div class="input-group input-group-sm">
                            <input class="form-control rounded-start-5" type="search" placeholder="Search...">
                            <button class="btn btn-outline-warning rounded-end-5 text-dark" type="submit">search</button>
                        </div>
                        <div class="px-3">
                            <button @click="$emit('checkout')" class="btn btn-sm btn-outline-warning"><i class="fas fa-cart-arrow-down"></i></button>
                        </div>
                    </form>
                    <div class="login"><a href="#">Log in</a></div>
                </div>
            </div>
        </nav>
    </div>
  </header>
  <!-- <footer>
    <div class="container-fluid" style="background-color:#252525 ;">
        <div class="row">
            <div class="col-4">
                <div class="my-3">
                    <a class="navbar-brand" href="#">
                        <span><img src="../assets/images/snapsvg-logo.png" alt="logo" width="52px" ></span>
                        <span class="h1 text-warning px-2">Modern Furnitures</span>
                    </a>
                </div>
                <div class="">
                    <nav>
                        <a href="#"><i class="fab fa-google"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </nav>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center align-item-center">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item "><span class="nav-link"><RouterLink to="/"><span>Home</span></RouterLink></span></li>
                    <li class="nav-item "><span class="nav-link"><RouterLink to="/about"><span>About</span></RouterLink></span></li>
                    <li class="nav-item "><span class="nav-link"><RouterLink to="/product"><span>Product</span></RouterLink></span></li>
                </ul>
            </div>
            <div class="footer col-4">
                <h4 class="text-light mt-3 py-2">Stay In Touch! Join our Newsletter</h4>
                <a href="#"><i class="fab fa-cc-visa"></i></a>
                <a style="color:#4265D6 ;" href="#" ><i class="fab fa-cc-amex"></i></a>
                <a href="#"><i class="fab fa-cc-mastercard"></i></a>
            </div>
        </div>
    </div>
  </footer> -->

  <RouterView />
</template>
