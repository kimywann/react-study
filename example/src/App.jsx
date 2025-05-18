import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const idRef = useRef(null); // { current: null }
  const passwordRef = useRef(null);
  const countRef = useRef(0);
  const [domain, setDomain] = useState("naver.com");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const domains = ["naver.com", "google.com", "kakao.com"];

  console.log("App", id);

  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    countRef.current += 1;

    if (!id?.trim()) {
      setErrors({ idError: "아이디를 입력해주세요." });
      idRef.current?.focus();
      return;
    }
    if (!password?.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요." });
      passwordRef.current?.focus();
      return;
    }
    setErrors({});
    console.log(fullDomain, password);
  };

  return (
    <>
      <div style={{ textAlign: "left" }} className="login-form">
        <div>
          <label
            htmlFor="id"
            style={{ display: "inline-blockm", width: "80px" }}
          >
            아이디
          </label>
          <input ref={idRef} type="text" value={id} onChange={onChangeEmail} />
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
          {errors.idError && (
            <div style={{ color: "red" }}>{errors.idError}</div>
          )}
        </div>
        <div>
          <label
            htmlFor="id"
            style={{ display: "inline-blockm", width: "80px" }}
          >
            비밀번호
          </label>
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          {errors.passwordError && (
            <div style={{ color: "red" }}>{errors.passwordError}</div>
          )}
        </div>
        <button onClick={onLogin}>로그인</button>
      </div>
    </>
  );
}

export default App;
