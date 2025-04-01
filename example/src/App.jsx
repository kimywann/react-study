import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [domain, setDomain] = useState("naver.com");

  const domains = ["naver.com", "google.com", "kakao.com"];

  console.log("App", id);

  const onChangeEmail = (e) => {
    console.log("before", id); // ""
    setId(e.target.value);
    console.log("after", id); // ""
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <input type="text" value={id} onChange={onChangeEmail} />
          {domain === "" ? null : <span>@</span>}
          <select value={domain} onChange={onChangeDomain}>
            {domains.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
            <option value="">직접입력</option>
          </select>
        </div>
        <input type="password" />
        <button>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
