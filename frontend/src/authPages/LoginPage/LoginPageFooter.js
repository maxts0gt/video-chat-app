import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  //
  return "Enter correct e-mail address and password should contain 6 to 12 characters";
};

const getFormValidMessage = () => {
  //
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px", cursor: "pointer" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
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
