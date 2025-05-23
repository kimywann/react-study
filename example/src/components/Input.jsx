import { memo } from "react";

function Input({ text, ref, type = "text", id, value, onChange, errors }) {
  return (
    <div>
      <label
        htmlFor="nickname"
        style={{ display: "inline-block", width: "80px" }}
      >
        {text}
      </label>
      <input
        ref={ref}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        errors={errors}
      />
      {errors && <div style={{ color: "red" }}>{errors}</div>}
    </div>
  );
}

export default memo(Input);
