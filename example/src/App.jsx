import { useState } from "react";
import "./App.css";

function App() {
  const [domain, setDomain] = useState("naver.com");

  const domains = ["naver.com", "google.com", "kakao.com"];

  return (
    <>
      <div>
        <div>
          <input type="text" />
          {domain === "" ? null : <span>@</span>}
          <select>
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
