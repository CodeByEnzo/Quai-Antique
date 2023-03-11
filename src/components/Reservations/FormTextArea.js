import { useState } from "react";

const FormTextArea = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...textareaProps } = props;
    const handleFocused = () => {
        setFocused(true);
    };
    return (
        <div className="formInput mb-3">
            <label className="form-label">{label}</label>
            <textarea
                className="form-control"
                {...textareaProps}
                onChange={onChange}
                onBlur={handleFocused}
                focused={focused.toString()}
            ></textarea>
            <span className="inputSpan text-danger">{errorMessage}</span>
        </div>
    );
};

export default FormTextArea;