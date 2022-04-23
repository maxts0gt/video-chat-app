import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Log In"
        additionalStyles={{ marginTop: "30px", cursor: "pointer" }}
        disabled={isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginPageFooter;
