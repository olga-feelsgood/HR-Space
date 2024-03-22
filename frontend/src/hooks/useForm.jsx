import { useState } from 'react';

export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.cityName) {
            errors.cityName = 'Пожалуйста, выберите город';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // onSubmitCallback(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return { formData, errors, handleChange, handleSubmit };
};
