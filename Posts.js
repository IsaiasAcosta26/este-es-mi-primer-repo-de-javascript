import { VscBug } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={function () {
        alert("Resivir datos");
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((formato) => formato.json())
          .then((evento) => console.log(evento));
      }}
    >
      <VscBug />
    </button>
  );

  const arrays = [
    {
      id: 1,
      name: "Isaias",
      imagen: "https://robohash.org/user1",
    },

    {
      id: 2,
      name: "Rudy",
      imagen: "https://robohash.org/user2",
    },
  ];
};
