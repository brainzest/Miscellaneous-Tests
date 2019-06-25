import React from 'react';
import InputField from './Field';
import { processData } from './DataService';

class FormGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {},
            errors: {},
            isSubmitting: false,
            submitted: false,
        };
    }

    fields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'first_name', label: 'First Name', type: 'text' },
        { name: 'last_name', label: 'Last Name', type: 'text' }
    ];

    // On Change Handler to handle data changes in fields
    onChange = (event) => {

    }

    // Add error handling that will add errors to the error object in the component state and return false when errors are present
    validation = () => {
        const errorCount = Object.keys(this.state.errors).length;
        if(errorCount === 0) return true;

        return true;
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { afterSubmit } = this.props;
        const { values } = this.state;
        if (!this.validation()) return false;

        
        this.setState((prevState) => {
            return {
                submitted: true
            }
        })
        
        afterSubmit && afterSubmit(values);

        return false;
    }

    render() {
        const { values, errors, isSubmitting, submitted } = this.state;
        return (

            <div>
                {
                    submitted
                        ?
                        <p>Form has been submitted</p>
                        :
                        <form onSubmit={this.submitHandler}>
                            {this.fields.map((field, idx) => {
                                return (
                                    <div key={`formField-${field.name}-${idx}`}>
                                        <InputField {...field} onChange={this.onChange} value={values[field.name] || ''} error={errors[field.name]} />
                                    </div>
                                )
                            })}
                            <div className="form-group row">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit Form</button>
                                </div>
                            </div>
                            {isSubmitting && <p className="text-center">Submitting Form</p>}
                        </form>

                }
            </div>
        );
    }
}

export default FormGenerator;