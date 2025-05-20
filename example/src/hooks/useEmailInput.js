import { useState, useRef, useCallback } from "react";

export default function useEmailInput() {
  const [id, setId] = useState("");
  const idRef = useRef(null);

  const [domain, setDomain] = useState("naver.com");

  const onChangeEmail = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeDomain = useCallback((e) => {
    setDomain(e.target.value);
  }, []);

  return {
    id,
    idRef,
    onChangeEmail,
    domain,
    onChangeDomain,
  };
}
