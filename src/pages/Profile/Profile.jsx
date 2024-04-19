import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="text-center mt-8">Loading...</div>
        ) : (
          <div>
            {currentUser ? (
              <div>
                <h1 className="text-4xl font-bold mt-8">Welcome, {currentUser.email}</h1>
                <p className="mt-4">You are logged in as {currentUser.displayName || 'Anonymous'}</p>
                <p className="mt-4">User ID: {currentUser.uid}</p>
                {/* Add more user information here */}
              </div>
            ) : (
              <div className="text-center mt-8">No user logged in. Please <Link to="/login" className="text-blue-500">login</Link> or <Link to="/register" className="text-blue-500">register</Link>.</div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
