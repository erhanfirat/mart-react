import { useEffect } from "react";
import { useInput } from "../hook/useInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useHistory } from "react-router-dom";

export const LoginPage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log("location: ", location);

  const [email, emailHandler] = useInput("login-name", "");
  const [password, passwordHandler] = useInput("login-pass", "");
  const [remember, rememberHandler] = useInput("login-remember", false);

  const doLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("login res >>> ", res.data);
        if (remember) {
          localStorage.setItem("token", res.data.token);
        } else {
          localStorage.removeItem("token");
        }

        if (location?.state?.referrer) {
          history.push(location.state.referrer);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        localStorage.removeItem("token");
      });
  };

  useEffect(() => {
    console.log("user input > ", { email, password, remember });
  }, [email, password, remember]);

  return (
    <div>
      <form onSubmit={doLogin}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={emailHandler} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={passwordHandler} />
        </div>
        <div>
          <label htmlFor="remember">Remember me</label>
          <input
            id="remember"
            type="checkbox"
            checked={remember}
            onChange={rememberHandler}
          />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};
