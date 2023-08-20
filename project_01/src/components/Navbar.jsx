const Navbar = () =>{
    return(
        <nav className="navbar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className="navitems">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="button">Login</button>
      </nav>
    );
};

export default Navbar;