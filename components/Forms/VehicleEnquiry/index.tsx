import { useForm } from 'react-hook-form';

type FormData = {
    fullName: string,
    telephoneNumber: string,
    email: string,
    enquiry: string,
    referralPage: string
};

const VehicleEnquiry = ({ classes, referralPage }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    // TODO: Hook up with some form of SMTP transport
    const onSubmit = handleSubmit(data => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log("We got a response!");

            if (res.status === 200) {
                console.log('Response succeeded!');
            }
        });
    });
    const FORM_INPUTS = [
        {
            id: 0,
            label: 'Full Name',
            input: <input type="text" id="firstName"
                        name="firstName" {...register("fullName", { required: true, minLength: 10 })}/>,
            errors: [
                errors.fullName?.type === 'required' && "First name is required",
                errors.fullName?.type === 'minLength' && "First name must be longer than 10 characters",
            ]
        },
        {
            id: 1,
            label: 'Telephone Number',
            input: <input type="tel" id="telephoneNumber" 
                        name="telephoneNumber" {...register("telephoneNumber", { required: true })}/>,
            errors: [errors.telephoneNumber?.type === 'required' && "Telephone number is required"]
        },
        {
            id: 2,
            label: 'Email',
            input: <input type="email" id="email" 
                        name="email" {...register("email", { required: true })}/>,
            errors: [errors.email?.type === 'required' && "Email address is required"]
        },
        {
            id: 3,
            label: 'How Can We Help?',
            input: <textarea {...register("enquiry")} rows="3"/>
        }
    ];

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

            <input type="hidden" name="referralPage" value={referralPage} {...register("referralPage")}/>

            <button type="submit" className="btn--block" onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
    )
}

export default VehicleEnquiry;