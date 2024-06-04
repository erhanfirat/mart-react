import { useDispatch, useSelector } from "react-redux";
import { SubscribeForm } from "../components/SubscribeForm";
import { MyButton } from "../components/MyButton";
import { useContext, useState } from "react";
import { Motivation } from "../components/Motivation";
import { myContext } from "../App";

export const Footer = () => {
  const [show, setShow] = useState(false);
  const title = useSelector((store) => store.title);
  const { theme } = useContext(myContext);

  const [inputTitle, setInputTitle] = useState(title);
  const dispatch = useDispatch();

  const setNewTitle = () => {
    dispatch({
      type: "SET_TITLE",
      payload: inputTitle,
    });
  };

  return (
    <footer>
      <h2>Footer</h2>
      <h2>{theme}</h2>
      <h3>{title}</h3>
      <MyButton onClick={() => setShow(!show)}>Change Title</MyButton>
      {show && (
        <div>
          <label>
            Title:
            <input
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
          </label>
          <MyButton onClick={setNewTitle}>Set New Title</MyButton>
        </div>
      )}
      {/* <SubscribeForm /> */}

      <Motivation />
    </footer>
  );
};
