import { useState, useRef } from "react";
import EmailInput from "./components/EmailInput";
import Input from "./components/input";
import "./App.css";

function Signup() {
  const [id, setId] = useState("");
  const idRef = useRef(null); // { current: null }

  const [domain, setDomain] = useState("naver.com");
  const fullDomain = `${id}@${domain}`;

  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");

  const [nickname, setNickname] = useState("");
  const nicknameRef = useRef(null);

  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);

  const [errors, setErrors] = useState({});

  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onLogin = () => {
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
        <button onClick={onLogin}>회원가입</button>
      </div>
      <div>로그인</div>
    </>
  );
}

export default Signup;
