import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Join With Us</h1>
                    <p>
                        Dive into a world of flavors. Discover unique recipes, share your favorite dishes, and connect with foodies from 
                        around the globe. Sign up now and savor the community of food lovers!
                    </p>
                    <span>Do you have an account?</span>
                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>REGISTER</h1>
                    <form>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register