import React from "react";

type SecretInputProps = {
  name: "dbId" | "token";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SecretInput = (props: SecretInputProps) => {
  const { name, value, onChange } = props;

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required
      style={{ margin: "3px", height: "22px", border: "1px solid grey" }}
    />
  );
};

export default SecretInput;
