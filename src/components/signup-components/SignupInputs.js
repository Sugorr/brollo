import React, { useState } from "react";
import "./SignupInputs.css";

function SignupInputs(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, type, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <>
                <input
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                    focused={focused.toString()}
                    type={showPassword ? "text" : "password"}
                />
                {type === "password" && (
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show password
                    </label>
                )}
            </>
            <span>{errorMessage}</span>
        </div >
    );
}

export default SignupInputs;
