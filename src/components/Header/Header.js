const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    <div id="guest">
                        <a className="button" href="/login">Login</a>
                        <a className="button" href="register">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, </span>
                        <a className="button" href="/my-pets">My Pets</a>
                        <a className="button" href="/create">Add Pet</a>
                        <a className="button" href="/logout">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;