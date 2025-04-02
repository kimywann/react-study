import { useState } from "react";
import "./App.css";

function veryHeavyComputation() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [id, setId] = useState(() => {
    return veryHeavyComputation();
  });
  const [domain, setDomain] = useState("naver.com");
  const [password, setPassword] = useState("");
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

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    console.log(fullDomain, password); // 서버로 보내서 로그인
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
        <input type="password" value={password} onChange={onChangePassword} />
        <button onClick={onLogin}>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
