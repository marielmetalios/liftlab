// need to fix 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className = "navbar navbar-expand-lg text-light bg-dark fixed-top" role="navigation" >
            <header className = "container-fluid d-flex align-items-center justify-content-between">
                    <h1>
                        <Link to="/" className = "navbar text-light">
                        LiftLab
                        </Link>
                    </h1>
                    <div className="d-flex ms-auto ">
                    {/* <span className= "navbar-nav me-3">Login</span> */}
                     </div>
            </header>
        </section>
    )
};

export default Navbar;