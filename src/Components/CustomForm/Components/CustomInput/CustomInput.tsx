import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import getInputErrorValidationMessage from "./getErrorMessage";
import "./CustomInput.css";

interface props {
	label: string;
	inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
};

const handleBlur = (e: ChangeEvent<HTMLInputElement>, setErrorMessage: Dispatch<SetStateAction<string>>) => {
	setErrorMessage(getInputErrorValidationMessage(e.target));
}
export const CustomInput = ({ label, inputAttributes }: props) => {
	const [errorMessage, setErrorMessage] = useState<string>("");

	return (
		<div className="custom-input-container">
			<label className="input-label">{label}</label>
			<input
				className="custom-input"
				onFocus={() => setErrorMessage("")}
				{...inputAttributes}
				onBlur={(e) => handleBlur(e, setErrorMessage)}
			/>
			{errorMessage.length > 0 && <span>Error: {errorMessage}</span>}

		</div>
	)
}


