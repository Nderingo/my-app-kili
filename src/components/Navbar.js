const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Big Five</h1>
            <div className="links">
               <a href="/">Home</a>
               <a href="/">About</a>
               <a href="/">Contact Us</a>
               <a href="/create" style={{ 
                    color: 'white', 
                    backgroundColor: 'green',
                    borderRadius: '8px' 
                    }}>World National Parks</a>
            </div>
        </nav>
    );
}
 
export default Navbar;