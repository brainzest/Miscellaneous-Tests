import React from 'react';


export const inputField = ({ name, value, label, onChange = () => {}, error }) => {
    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label text-right">{label}</label>
            <div className="col-sm-10 text-left">
                <input  className={`form-control ${error && 'is-invalid'}`} />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default inputField;