import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Log In"
          additionalStyles={{ marginTop: "30px", cursor: "pointer" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>

      <RedirectInfo
        text="Don't have an account?"
        redirectText="Create an account"
        additionaStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
