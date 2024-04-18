import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-3xl text-center mt-60">
            <h2 className="font-bold text-blue-900 text-8xl">404 route!!!</h2>
            <p className="text-3xl">not found page!</p>
            <Link className="text-red-300" to="/"><button className="btn btn-success text-white mt-10">Home</button></Link>
        </div>
    );
};

export default ErrorPage;