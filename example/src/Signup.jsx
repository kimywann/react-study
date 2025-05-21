import { useState } from "react";

import EmailInput from "./components/EmailInput";
import Input from "./components/Input";

import useInput from "./hooks/useInput";
import useEmailInput from "./hooks/useEmailInput";

import "./App.css";

function Signup() {
  const { id, idRef, onChangeEmail, onChangeDomain, domain } = useEmailInput();
  const [password, passwordRef, onChangePassword] = useInput("");
  const [nickname, nicknameRef, onChangeNickname] = useInput("");
  const [phone, phoneRef, onChangePhone] = useInput("");

  const [errors, setErrors] = useState({});

  const fullDomain = `${id}@${domain}`;

  const onSignup = () => {
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

  const onLogin = () => {
    history.pushState(null, "", "/login");
    dispatchEvent(new PopStateEvent("popstate"));
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
        <Input
          text="닉네임"
          id="nickname"
          ref={nicknameRef}
          value={nickname}
          onChange={onChangeNickname}
          errors={errors.nicknameError}
        />
        <Input
          text="전화번호"
          id="phone"
          ref={phoneRef}
          type="tel"
          value={phone}
          onChange={onChangePhone}
          errors={errors.phoneError}
        />
        <button onClick={onSignup}>회원가입</button>
      </div>
      <button onClick={onLogin}>로그인</button>
    </>
  );
}

export default Signup;
