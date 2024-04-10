import { useState, useEffect } from "react";
function Home() {
  useEffect(() => {
    getAPI();
  });

  const getAPI = async () => {
    const response = await fetch(`http://127.0.0.1/v1/posts/index`);
    const data = response.json();
    console.log(data);
  };

  const [name, setName] = useState("chưa có");

  const [text, setText] = useState("chưa có");
  const getName = (e) => {
    setText(e.target.value);
  };
  //   dùng cho button lấy value
  const haddleName = (e) => {
    setName(text);
  };

  return (
    <div className="home">
      <h1>{name}</h1>
      <input type="text" onChange={getName}></input>
      <button onClick={haddleName}>click</button>
    </div>
  );
}
export default Home;
