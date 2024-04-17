import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import loginPic from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

         //create user
         signIn(email, password)
         .then(result =>{
             console.log(result.user);
 
             //navigate after login
 
             navigate(location?.state ? location.state : '/');
         })
         .catch(error =>{
             console.error(error)
         })
    }

    return (
        
        <div>
            <Navbar></Navbar>

    <div className="hero min-h-screen my-16">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold ml-20">Login now!</h1>
     <img className="w-2/3  mt-4" src={loginPic} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-28">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Do not Have an account? <Link className="text-blue-400 font-bold" to='/register'>Register</Link></p>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Login;