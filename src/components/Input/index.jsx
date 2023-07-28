import { forwardRef } from "react";
import { InputContainer, InputDefault } from "./style";

export const Input = forwardRef(({ label, id, placeholder, type, ...rest }, ref) => {
  return (
    <InputContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {" "}
      <InputDefault
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </InputContainer>
  );
});
