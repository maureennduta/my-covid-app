import React from 'react';
import {
    Button,
    Form,
    TextInput,
    DatePicker,
    DatePickerInput,
} from 'carbon-components-react';
import './register.css';

export const Register = () => {
    const onError = () => {
        alert("Network Error,please contact admin");
        console.log('error');
    }

    return (
        <>
            <Form className="registerform">
                <div className="bx--grid">
                    <div>
                        <h1 className="h1">Create New Patient </h1>
                        <TextInput
                            className="patientname"
                            id="patientName"
                            data-testid="patientname"
                            name="patientName"
                            labelText="Patient Name:"
                            placeholder="Enter Patient Name"
                            type="text"
                            required
                        />
                        <TextInput
                            className="age"
                            name="age"
                            id="age"
                            labelText="Age:"
                            placeholder="Enter age"
                            data-testid="age"
                            required
                        />
                        <DatePicker dateFormat="m/d/Y" datePickerType="single">
                            <DatePickerInput
                                id="date-picker-default-id"
                                placeholder="mm/dd/yyyy"
                                labelText="DOB"
                                required
                            />
                        </DatePicker>
                        <TextInput
                            className="ID"
                            name="ID"
                            id="ID"
                            labelText="ID:"
                            placeholder="Enter ID"
                            data-testid="id"
                            required
                        />
                        <TextInput
                            className="NSSF"
                            name="NSSF"
                            id="NSSF"
                            labelText="NSSF:"
                            placeholder="Enter NSSF"
                            data-testid="nssf"
                            required
                        />
                        <div>
                            <Button
                                size="default"
                                kind="primary"
                                type="button"
                                data-testid="register"
                                className="registerbutton"
                                onClick={onError}
                            >
                                Add Patient
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
};