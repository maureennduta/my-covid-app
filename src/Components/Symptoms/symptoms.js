import React from 'react';
import {
    Button,
    Form,
    TextInput,
    SelectItem,
    Select,
} from 'carbon-components-react';
import './symptoms.css';

export const Symptoms = () => {
    const onError = () => {
        alert("Network Error,please contact admin");
        console.log('error');
    }


    return (
        <>
            <Form className="symptomform">
                <div className="bx--grid">
                    <div>
                        <h1 className="h1">Record New Symptoms </h1>
                        <TextInput
                            className="patientname"
                            id="patientName"
                            name="patientName"
                            data-testid="patientname"
                            labelText="Patient Name:"
                            placeholder="Enter Patient Name"
                            type="text"
                        />
                        <h6>Have you had any of the following symptoms in the last 48 hours?</h6>
                        <Select
                            defaultValue="placeholder-item"
                            id="select-1"
                            invalidText="A valid value is required"
                            labelText="Sudden Loss of Taste and Smell"
                            data-testid="taste"
                        >
                            <SelectItem
                                text="Yes"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="No"
                                value="placeholder-item"
                            />
                        </Select>
                        <Select
                            defaultValue="placeholder-item"
                            id="select-2"
                            invalidText="A valid value is required"
                            labelText="Sudden Loss of Energy"
                            data-testid="energy"
                        >
                            <SelectItem
                                text="Yes"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="No"
                                value="placeholder-item"
                            />
                        </Select>
                        <Select
                            defaultValue="placeholder-item"
                            id="select-3"
                            invalidText="A valid value is required"
                            labelText="Difficulty breathing/Loss of Breath"
                            data-testid="breath"
                        >
                            <SelectItem
                                text="Yes"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="No"
                                value="placeholder-item"
                            />
                        </Select>
                        <Select
                            defaultValue="placeholder-item"
                            id="select-4"
                            invalidText="A valid value is required"
                            labelText="Temperature greater than 37.5C"
                            data-testid="temperature"
                        >
                            <SelectItem
                                text="Yes"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="No"
                                value="placeholder-item"
                            />
                        </Select>
                        <Select
                            defaultValue="placeholder-item"
                            id="select-1"
                            invalidText="A valid value is required"
                            labelText="Sudden Loss of Taste and Smell"
                            data-testid="smell"
                        >
                            <SelectItem
                                text="Yes"
                                value="placeholder-item"
                            />
                            <SelectItem
                                text="No"
                                value="placeholder-item"
                            />
                        </Select>


                        <div>
                            <Button
                                size="default"
                                kind="primary"
                                type="button"
                                data-testid="register"
                                className="registerbutton"
                                onClick={onError}
                            >
                                Submit Symptoms
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
};