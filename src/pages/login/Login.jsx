import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome Foodie</h1>
                    <p>
                        Dive into a world of flavors. Discover unique recipes, share your favorite dishes, and connect with foodies from 
                        around the globe. Sign in now and savor the community of food lovers!
                    </p>
                    <span>Don't you have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>LOGIN</h1>
                    <form>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login