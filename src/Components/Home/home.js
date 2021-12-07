import React from 'react';
import {
    Tab,
    Tabs,
    Form,
} from 'carbon-components-react';
import './home.css'

export const Home = () => {

    return (
        <>
            <Form className="form" method="POST" data-testid="home">
                <div>
                    <h1 className="h1">COVID-19 INFORMATION</h1>
                    <Tabs data-testid="tabs" className="tabs" scrollIntoView={false}>
                        <Tab
                            href="#"
                            id="tab-1"
                            label="What is COVID-19?"
                            className="tab"
                        >
                            <div className="text1">
                                Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
                                <br />
                                Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.
                            </div>
                        </Tab>
                        <Tab
                            href="#"
                            id="tab-2"
                            label="COVID-19 transmission"
                            className="tab"
                        >
                            <div className="text2">
                                COVID-19 is primarily airborne. The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe.
                                These particles range from larger respiratory droplets to smaller aerosols.
                                <br />
                                The risk of breathing these in is highest when people are in close proximity, but they can be inhaled over longer distances, particularly indoors. Transmission can also occur if splashed or sprayed with contaminated fluids in the eyes, nose or mouth, and, rarely, via contaminated surfaces.

                            </div>
                        </Tab>
                        <Tab
                            href="#"
                            id="tab-3"
                            label="Keep yourself safe"
                            className="tab"
                        >
                            <div className="text3">
                                The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.
                                <br />
                                Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Form>
        </>
    );
};