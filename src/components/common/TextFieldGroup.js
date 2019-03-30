import React from 'react';
import classnames from 'classnames';


const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    errors,
    info,
    type,
    onChange,
}) => {
    return(
        <div className="form-group">
            <input type={type} 
            className={classnames('form-control form-control-lg', {
                'is-invalid' : errors
            })}
            
            placeholder={placeholder} name={name} value={value} onChange={onChange}/>
            
            {(<div className="invalid-feedback">{errors}</div>)}

        </div>
    );
};


export default TextFieldGroup;