import React, { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children, title }) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        sphereName: "",
        cityName: "",
        work_format: "",
        salaryName: "",
        workingHoursName: "",
        type_employment: "",
        business_trip: "",
        hr_requirements: "",
        jobPeculiaritiesName: "",
        subordinates_number_name: "",
        work_experience: "",
        skillsName: "",
        education: "",
        portfolio: "",
        number_vacancies_name: "",
        award_option: "",
        money_recruiters_name: "",
        format_interview: "",
        hr_responsibility: "",
        agreement: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    useEffect(() => {
        const requiredInputs = Object.keys(data).filter((key) => key !== "billAddress2");

        const canSubmit = requiredInputs.every((key) => data[key]) && page === title.length - 1;

        const canNextPage1 = Object.keys(data)
            .filter((key) => key.startsWith("bill") && key !== "billAddress2")
            .every((key) => data[key]);

        const canNextPage2 = Object.keys(data)
            .filter((key) => key.startsWith("ship") && key !== "shipAddress2")
            .every((key) => data[key]);

        const disablePrev = page === 0;

        const disableNext =
            page === title.length - 1 ||
            (page === 0 && !canNextPage1) ||
            (page === 1 && !canNextPage2);

        const prevHide = page === 0 && "remove-button";
        const nextHide = page === title.length - 1 && "remove-button";
        const submitHide = page !== title.length - 1 && "remove-button";

        return () => {
            <FormContext.Provider
                value={{
                    title,
                    page,
                    setPage,
                    data,
                    setData,
                    canSubmit,
                    handleChange,
                    disablePrev,
                    disableNext,
                    prevHide,
                    nextHide,
                    submitHide,
                }}
            >
                {children}
            </FormContext.Provider>;
        };
    }, [data, page, title, children]);

    return (
        <FormContext.Provider
            value={{
                title,
                page,
                setPage,
                data,
                setData,
                canSubmit,
                handleChange,
                disablePrev,
                disableNext,
                prevHide,
                nextHide,
                submitHide,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
