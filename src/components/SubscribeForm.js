import { useState } from "react";

export const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    news: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log(
      "input name, value, type, checked > ",
      name,
      value,
      type,
      checked
    );
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", age: 0, news: false });
  };

  return (
    <form
      className="subscribe-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.warn("FORM SUBMIT: ", formData);
      }}
    >
      <div>
        <label htmlFor="subscribe-name">İsim</label>
        <input
          id="subscribe-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          News
          <input
            type="checkbox"
            name="news"
            checked={formData.news}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>Name: {formData.name}</div>
      <div>Email: {formData.email}</div>
      <div>Age: {formData.age}</div>
      <div>News: {formData.news}</div>
      <button type="button" onClick={resetForm}>
        RESET
      </button>
      <button type="submit">Subscribe!</button>
    </form>
  );
};
