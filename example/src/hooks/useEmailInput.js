import { useState, useRef } from "react";

export default function useEmailInput() {
  const [id, setId] = useState("");
  const idRef = useRef(null);

  const [domain, setDomain] = useState("naver.com");

  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  return {
    id,
    idRef,
    onChangeEmail,
    domain,
    onChangeDomain,
  };
}
