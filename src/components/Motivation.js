import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Motivation = () => {
  // const blockquote = {
  //   word: "Cümle",
  //   author: "Yazar",
  // };

  const {
    data: blockquote = {},
    error,
    isPending,
  } = useQuery({
    queryKey: ["motivation"],
    queryFn: () =>
      axios
        .get("https://workintech-ng.onrender.com/motivation")
        .then((res) => res.data),
  });

  return (
    <blockquote>
      <p>{blockquote.word}</p>
      <cite>{blockquote.author}</cite>
    </blockquote>
  );
};
