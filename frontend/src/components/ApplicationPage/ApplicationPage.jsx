import './ApplicationPage.css';
import Button from '../Button/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ApplicationPage() {

    const [stepIsValid, setStepIsValid] = useState(true);
    let navigate = useNavigate();
    const onRedirect = () => navigate('/jobdescription/sphere');

    return (
        <section className="application__section">
            <h1 className="application__title">Заполните все поля заявки максимально подробно.</h1>
            <p className="application__text">Это поможет ускорить процесс поиска кандидата
                и сделает его максимально релевантным вашему запросу.</p>
            <Button
                onClick={onRedirect}
                stepIsValid={stepIsValid}
                buttonTitle='Далее'
                buttonType='button' />
        </section>
    )
}

export default ApplicationPage;
