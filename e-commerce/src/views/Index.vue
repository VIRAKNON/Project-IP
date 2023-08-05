<template>
    <!-- bootstrap Icon -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&family=Lobster&family=Poppins&family=Rampart+One&family=Titillium+Web&display=swap" rel="stylesheet">
    <header>
        <div class="wrapper">
            <nav class="navbar navbar-dark navbar-expand-lg py-1" style="background-color: #D4E8FF;">
                <div class="container-fluid sticky-top">
                    <a class="navbar-brand" href="#">
                        <!-- <span><img src="../assets/images/snapsvg-logo.png" alt="logo" width="52px" ></span> -->
                        <span class="h1 text-warning px-2" style="font-family: 'Lobster', cursive; font-size: 70px;">Modern Furnitures</span>
                    </a>
                    <dev class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" style="border:none ;appearance: none; ">
                        <!-- <span class="navbar-toggler-icon"></span> -->
                        <div id="menuToggle">
                            <input id="checkbox" type="checkbox">
                            <label class="toggle" for="checkbox">
                                <div class="bar bar--top"></div>
                                <div class="bar bar--middle"></div>
                                <div class="bar bar--bottom"></div>
                            </label>
                        </div>
                    </dev>
                    <div class="menu collapse navbar-collapse sticky-top" id="navbar">
                        <!-- collapes = display-none -->
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item text-white"><span class="nav-link"><RouterLink to="/"><span>Home</span></RouterLink></span></li>
                            <li class="nav-item "><span class="nav-link"><RouterLink to="/beds"><span>Beds</span></RouterLink></span></li>
                            <li class="nav-item "><span class="nav-link"><RouterLink to="/sofas"><span>Sofas</span></RouterLink></span></li>
                            <li class="nav-item "><span class="nav-link"><RouterLink to="/chairs"><span>Chairs</span></RouterLink></span></li>
                        </ul>
                        <form class="d-flex" role="search">
                            <!-- <div class="input-group input-group-sm">
                                <input class="form-control rounded-start-5" type="search" placeholder="Search...">
                                <button class="btn btn-outline-warning btn-light rounded-end-5 text-dark" type="submit">search</button>
                            </div> -->
                            <div class="input-container">
                                <input placeholder="Search something..." class="input" name="text" type="text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white"></rect> <path d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                            </div>
                            <div class="px-3" style="display:flex ; justify-content: center; justify-content: center;">
                                <button @click="$emit('checkout')" class="checkout btn btn-sm" style="appearance:none ; border:none; "><i class="fas fa-cart-arrow-down"></i></button>
                            </div>
                        </form>
                        <button class="login"><RouterLink to="/login">Login</RouterLink></button>
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
