import { useState } from "react";



const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, hours, id, ...inputProps } = props;
    const handleFocused = (e) => {
        setFocused(true);
    };
    return (
        <div className="formInput mb-3">
            <label className="form-label">{label}</label>
            <input
                className="form-control"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocused}
                focused={focused.toString()} />
            <span className="inputSpan text-danger">{ errorMessage }</span>
        </div>
    )
}

export default FormInput