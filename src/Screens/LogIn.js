import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MainScreen.css";
export const LogIn = () => {
  const [name, setName] = useState("");
  //wore here
  //onChange of the values of these three add it to setData
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (name && !email) {
      navigate(`/main/${name}`);
    } else if (name && email) {
      navigate(`/main/${name}/${email}`);
    }
    // u should log those three values here
    console.log(data);
  };

  return (
    <>
      <div className="mainClass">
        <div className="mainClass1">
          <div className="border">
            <h1 className="main"> Login </h1>

            <form>
              <div className="label">
                <div>
                  <label className="email"> Name</label>
                  <div>
                    <input
                      type="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <label className="email"> Email</label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="email"> Password</label>
                  <div>
                    <input type="Password" placeholder="Enter password" />
                  </div>
                </div>
              </div>
            </form>

            <div>
              <button onClick={handleClick} className="log">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
