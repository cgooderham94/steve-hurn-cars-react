import React from 'react'
import { useForm } from 'react-hook-form';
import { isUnparsedSource } from 'typescript';

type FormData = {
    firstName: string,
    telephoneNumber: string,
    email: string,
    enquiry: string
};

const VehicleEnquiry = ({ classes }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
    const FORM_INPUTS = [
        {
            id: 0,
            label: 'First Name',
            input: <input type="text" id="firstName" 
                        name="firstName" {...register("firstName", { required: true, minLength: 10 })}/>,
            errors: [
                errors.firstName?.type === 'required' && "First name is required",
                errors.firstName?.type === 'minLength' && "First name must be longer than 10 characters",
            ]
        },
        {
            id: 1,
            label: 'Telephone Number',
            input: <input type="tel" id="telephoneNumber" name="telephoneNumber" {...register("telephoneNumber", { required: true })}/>,
            errors: [errors.telephoneNumber?.type === 'required' && "Telephone number is required"]
        },
        {
            id: 2,
            label: 'Email',
            input: <input type="email" id="email" name="email" {...register("email", { required: true })}/>,
            errors: [errors.email?.type === 'required' && "Email address is required"]
        },
        {
            id: 3,
            label: 'How Can We Help?',
            input: <textarea {...register("enquiry")} rows="3"/>
        }
    ];

    console.log(errors);

    return (
        <form action="" className={`flex flex-col ${classes}`}>
            <div className="form__errors"></div>
            { FORM_INPUTS.map(input => {
                return (
                    <label key={input.id} className="input-group--inline-label">
                        <div>
                            { input.input }
                            <div className="input-group__label-text">{ input.label }</div>
                        </div>
                        { input?.errors?.length && (
                            <ul className="input__errors text-xs text-red order-2 mt-1">
                                { input.errors.map(error => {
                                    return error && <li key={input.id}>{ error }</li>
                                }) }
                            </ul>
                        ) }
                    </label>
                )
            }) }

            <button type="submit" className="btn--block" onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default VehicleEnquiry;