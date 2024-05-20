import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    // useform içinden çekilecek state ve methodlar
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: 0,
    },
    mode: "onBlur",
  });
  // settings gelecek

  const mySubmitHandler = (formData) => {
    console.log("submit edilen form datası > ", formData);
    // axios.post("mypage.com/register", formData)
  };

  return (
    <form onSubmit={handleSubmit(mySubmitHandler)}>
      <div>
        <label>
          İsim
          <input
            type="text"
            {...register("name", {
              required: "İsim alanı boş bırakılamaz...",
              minLength: {
                value: 3,
                message: "İsim bilgisi en az 3 karakter olmalıdır.",
              },
              maxLength: {
                value: 20,
                message: "İsim bilgisi en fazla 20 karakter olabilir.",
              },
            })}
          />
        </label>
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div>
        <label>
          Email
          <input
            type="text"
            {...register("email", {
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Lütfen geçerli bir e-posta adresi giriniz...",
              },
            })}
          />
        </label>
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label>
          Şifre
          <input
            type="password"
            {...register("password", {
              validate: (inputVal) => {
                // axios.post("check-email", inputVal)
                if (inputVal === inputVal.toLowerCase()) {
                  return "Şifre büyük harf içermelidir...";
                } else if (inputVal === inputVal.toUpperCase()) {
                  return "Şifre küçük harf içermelidir...";
                } else if (!/\d/.test(inputVal)) {
                  return "Şifre rakam içermelidir...";
                } else if (inputVal.length < 6) {
                  return "Şifre en az 6 karakter olmalı...";
                }
                return true;
              },
            })}
          />
        </label>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <div>
        <label>
          Yaş
          <input type="number" {...register("age")} />
        </label>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};
