import './StepOfficeRemote.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field } from "formik";

function StepOfficeRemote() {
  const navigate = useNavigate();

  const initialValues = {
    officeType: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/jobdescription/salary');
  };

  return (
    <div className='office-remote__container'>
      <Formik
        className="form"
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <form>
          <label>
            <Field type="radio" name="officeType" value="Удаленная" />
            Удаленная
          </label>
          <label>
            <Field type="radio" name="officeType" value="Гибрид" />
            Гибрид
          </label>
          <label>
            <Field type="radio" name="officeType" value="Офис" />
            Офис
          </label>

          <div className='office-remote__button'>
            <Button
              type="submit"
              buttonTitle='Далее'
            />
          </div>
        </form>
      </Formik>
    </div>
  );
}

export default StepOfficeRemote;
