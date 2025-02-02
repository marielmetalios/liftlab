// need to fix 
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <section className = "navbar navbar-expand-lg text-light bg-dark fixed-top" role="navigation" >
            <header className = "container-fluid">
                <div >
                    <h1 className = "navbar-brand text-light">LiftLab</h1>
                        <p className = "navbar-toggler"> Testing
                        </p>
                    <span className= "d-flex navbar-nav me-auto"> Login </span>
                    <span className="navbar-nav me-auto"> Home </span>
                </div>
            </header>
        </section>
    )
};

export default Navbar;