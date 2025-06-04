import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import profile from "../type/profile.json";
type PROFILE = typeof profile;

function App() {
  const [res, setRes] = useState<PROFILE>();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profile")
      .then((response) => {
        setRes(response.data);
      })
      .catch((error) => {
        console.error("リクエストエラー:", error);
      });
  }, []);
  console.log(res);

  return (
    <>
      <h1>名前：{res?.name}</h1>
      <h2>言語：{res?.lang}</h2>
      <h2>言語：{res?.["teck-lang"]}</h2>
      <h3>一言：{res?.comment}</h3>
    </>
  );
}

export default App;
