import { useEffect } from "react";
import { useInput } from "../hook/useInput";

export const LoginPage = () => {
  const [email, emailHandler] = useInput("login-name", "");
  const [password, passwordHandler] = useInput("login-pass", "");
  const [remember, rememberHandler] = useInput("login-remember", false);

  useEffect(() => {
    console.log("user input > ", { email, password, remember });
  }, [email, password, remember]);

  return (
    <div>
      <form>
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
