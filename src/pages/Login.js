
import '../App.css';
import Button from '../Components/Button'
import {Link} from "react-router-dom";




function Login({login,isAuthenticated,toggleAuthenticated}) {

    return (

        <div className="wrappingcontainer">
            <h1>Login pagina</h1>
            <p>druk op de knop om in te loggen</p>
            <Link exact to="/">
            <Button name="inloggen" className="inlogbtn" handleClick={login}/>
            </Link>
        </div>
    );
}

export default Login;