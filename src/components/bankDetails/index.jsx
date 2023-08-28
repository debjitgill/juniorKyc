import React, { useState } from "react";
import RButton from "../rButton";
import RInput from "../rInput";
import "./styles.scss";
export function BankDetails() {
  const [formData, setFormData] = useState({
    bankAcNo: "",
    ifsc: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.bankAcNo.length < 5 || formData.bankAcNo.length > 14) {
      newErrors.bankAcNo = "*Invalid Accout no.";
      isValid = false;
    }
    if (formData.ifsc.length < 6) {
      newErrors.ifsc = "*Invalid IFSC code.";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };
  return (
    <>
      <div className="border bg-neutral mx-12 ">
        <div className="font-bold flex justify-center p-3 text-3xl">
          Enter your Bank Details
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col w-1/3 mt-2">
            <label className="font-bold flex justify-center mt-4">
              Bank Account Number
            </label>
            <RInput
              placeHolder="Enter your Bank Accout Number"
              externalClassName="border my-4"
              bgColor="bg-red"
              type="number"
              name="bankAcNo"
              value={formData.bankAcNo}
              onChange={handleChange}
            />
            {errors?.bankAcNo && (
              <span className="error-txt text-sm text-red">
                {errors.bankAcNo}
              </span>
            )}
          </div>
          <div className="flex flex-col w-1/3 mt-4">
            <label className="font-bold flex justify-center mt-2">
              Enter Your Bank IFSC Code
            </label>
            <RInput
              placeHolder="Enter your Bank IFSC Code"
              externalClassName="border border-primary my-4"
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
            />
            {errors?.ifsc && (
              <span className="error-txt text-sm text-red">{errors.ifsc}</span>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <RButton
            externalClassName="mb-8"
            buttonName="Proceed"
            handleButtonClick={handleSubmit}
            type={"submit"}
          />
        </div>
      </div>
    </>
  );
}
