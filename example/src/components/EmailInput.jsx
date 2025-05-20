import { memo } from "react";

function EmailInput({
  errors,
  idRef,
  id,
  domain,
  onChangeEmail,
  onChangeDomain,
}) {
  const domains = ["naver.com", "google.com", "kakao.com"];

  return (
    <div>
      <label htmlFor="id" style={{ display: "inline-block", width: "80px" }}>
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
      {errors.idError && <div style={{ color: "red" }}>{errors.idError}</div>}
    </div>
  );
}

export default memo(EmailInput);
