import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth"; 
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/default.jpg";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [displayName, setDisplayName] = useState(user.displayName || ""); // Set initial display name to user's current display name

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSaveChanges = async () => {
    try {
     
      await updateProfile(user, { displayName });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 ">
      <Navbar user={user} />
      <div className="container mx-auto px-4 mb-8">
        {loading ? (
          <div className="text-center mt-8">Loading...</div>
        ) : (
          <div>
            {user ? (
              <div className="bg-base-200">
                 <p className="font-bold text-center text-2xl">User Profile</p>
                <div className="hero-content mx-8 md:mx-16 lg:mx-52 flex-col">
                  <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body">
                      <img
                        src={user?.photoURL || defaultImage} 
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover lg:ml-64 ml-28 md:ml-44"
                      />
                      <div className="form-control">
                        <input
                          type="text"
                          placeholder={user.displayName || "Anonymous"}
                          className="input input-bordered"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)} // Update the displayName state as the user types
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="email"
                          placeholder={user.email}
                          className="input input-bordered"
                      
                        />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">
                            Want to change your email?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center mt-8">
                No user logged in. Please <Link to="/login" className="text-blue-500">login</Link> or <Link to="/register" className="text-blue-500">register</Link>.
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
