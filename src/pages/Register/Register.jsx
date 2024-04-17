import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import registerPic from '../../assets/register.jpg';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
   const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
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
      <h1 className="text-4xl font-bold ml-20">Register here!</h1>
     <img className="w-2/3  mt-4" src={registerPic} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-28">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already Have an account? <Link className="text-blue-400 font-bold" to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Register;