const NavBar = () => {
    return <nav class="item p-4 sm:p-8 sm:flex sm:justify-between gap-10">
                <div class="nav-item sm:flex-1">
                    <span class="logo font-extrabold">TOPRYDE</span>&nbsp;Barbershop
                </div>
                <div class="nav-item hidden sm:inline font-semibold">
                    <a href="#testimonials">Testimonals</a>
                </div>
                <div class="nav-item hidden sm:inline font-semibold">
                    <a href="#services">Our Services</a>
                </div>
                <div class="nav-item hidden sm:inline font-semibold">
                    <a href="#gallery">Our Work</a>
                    </div>
        </nav>
}

export default NavBar