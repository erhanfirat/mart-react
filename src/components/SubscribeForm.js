import { useState } from "react";

const konular = [
  "Haberler",
  "Moda",
  "Seyahat",
  "Teknoloji",
  "Bilim",
  "İş Hayatı",
];

export const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    news: false,
    car: "",
    color: "",
    list: [],
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    age: "",
    news: "",
    car: "",
    color: "",
    list: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const konuListChangeHandler = (e) => {
    const { value, checked } = e.target;
    const newList = [...formData.list];

    if (checked) {
      newList.push(value);
    } else {
      newList.splice(newList.indexOf(value), 1);
    }
    setFormData({ ...formData, list: newList });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", age: 0, news: false });
  };

  const validate = () => {
    // name field validation
    if (!formData.name) {
      setFormErrors({ ...formErrors, name: "İsim alanı zorunludur..." });
    } else if (formData.name.length < 3) {
      setFormErrors({
        ...formErrors,
        name: "En az 3 karakter girilmesi gerekiyor...",
      });
    } else if (formData.name.length > 20) {
      setFormErrors({
        ...formErrors,
        name: "En fazla 20 karakter girilebilir...",
      });
    } else {
      setFormErrors({
        ...formErrors,
        name: "",
      });
    }

    // email validation

    // list validation
  };

  const isValid = () => {
    return !(formErrors.name || formErrors.email || formErrors.list);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // form validasyonları çalışmalı
    validate();

    if (isValid()) {
      // eğer form valid ise form datasını gönder
      console.warn("FORM SUBMIT: ", formData);
    } else {
      // eğer form valid değil ise iptal et
      return;
    }
  };

  return (
    <form className="subscribe-form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="subscribe-name">
          İsim
          <input
            id="subscribe-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        {formErrors.name && <p className="error">{formErrors.name}</p>}
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
      <div>
        <label>
          Choose your car!
          <select name="car" onChange={handleInputChange}>
            <option disabled selected>
              Araç Markasını Seçiniz...
            </option>
            <option value={"a1"}>Audi</option>
            <option value={"b1"}>BMW</option>
            <option value={"m1"}>Mercedes</option>
            <option>Volkswagen</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>Suzuki</option>
            <option>Tesla</option>
          </select>
        </label>
      </div>
      <div>
        <label>Color: </label>
        <div className="options">
          <label>
            Mor
            <input
              type="radio"
              name="color"
              value={"Mor"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Mavi
            <input
              type="radio"
              name="color"
              value={"Mavi"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Yeşil
            <input
              type="radio"
              name="color"
              value={"Yeşil"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sarı
            <input
              type="radio"
              name="color"
              value={"Sarı"}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label>Ton</label>
        <div>
          <label>
            Açık
            <input
              type="radio"
              name="ton"
              value={"Açık"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Orta
            <input
              type="radio"
              name="ton"
              value={"Orta"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Koyu
            <input
              type="radio"
              name="ton"
              value={"Koyu"}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
      <div>
        {konular.map((konu) => (
          <label key={konu}>
            {konu}
            <input
              type="checkbox"
              name="list"
              value={konu}
              checked={formData.list.includes(konu)}
              onChange={konuListChangeHandler}
            />
          </label>
        ))}
      </div>
      <hr />

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
