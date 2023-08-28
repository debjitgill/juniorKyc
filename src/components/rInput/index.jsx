import React from "react";

const RInput = () => {
  const {
    externalClassName,
    onChange,
    value,
    placeHolder = "Enter Text",
    isPhoneNumber = false,
    type = "text",
    name,
    onKeyDown,
    bgColor,
  } = props;

  const renderInput = () => {
    return (
      <div className="defaultInputbox">
        <input
          name={name}
          className={` defaultInput ${externalClassName}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  };

  const renderPhoneInput = () => {
    return (
      <div className={`defaultPhoneWrapper `}>
        <span className={`defaultCountryCode ${bgColor ?? "bg-tertiary"}`}>
          +91
        </span>
        <input
          name={name}
          className={`defaultInput ${externalClassName}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  };
  return (
    <>
      {!isPhoneNumber && renderInput()}
      {isPhoneNumber && renderPhoneInput()}
    </>
  );
};

export default RInput;
