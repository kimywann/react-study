import { useState, useRef } from "react";
import { useNavigate } from "react-router";

import "./App.css";

import useEmailInput from "./hooks/useEmailInput";
import useInput from "./hooks/useInput";

import EmailInput from "./components/EmailInput";
import Input from "./components/Input";

function Login() {
  const { id, idRef, onChangeEmail, onChangeDomain, domain } = useEmailInput();
  const [password, passwordRef, onChangePassword] = useInput("");
  const countRef = useRef(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const onSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div style={{ textAlign: "left" }} className="login-form">
        <EmailInput
          text="아이디"
          id={id}
          idRef={idRef}
          domain={domain}
          onChangeEmail={onChangeEmail}
          onChangeDomain={onChangeDomain}
          errors={errors}
        />
        <Input
          text="비밀번호"
          id="password"
          ref={passwordRef}
          type="password"
          value={password}
          onChange={onChangePassword}
          errors={errors.passwordError}
        />
        <button onClick={onLogin}>로그인</button>
      </div>
      <button onClick={onSignup}>회원가입</button>
    </>
  );
}

export default Login;
