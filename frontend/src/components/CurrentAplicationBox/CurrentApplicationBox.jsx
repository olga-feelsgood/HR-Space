import './CurrentApplicationBox.css';
import check from '../../images/check.svg'
import close from '../../images/close.svg';
import { useContext } from "react"
import FormContext from '../../context/FormContext';

function CurrentApplicationBox() {
    const { data, setData } = useContext(FormContext);

    //реализация удаления, но без стилизации
    // const handleDelete = (keyToDelete) => {
    //     const newData = { ...data };
    //     delete newData[keyToDelete];
    //     setData(newData);
    // };

    return (
        <div className="current__container">
            <h2 className="current__title">Текущая заявка {data.name}</h2>
            {/* <img src={check} className="current__check" alt="check" /> */}
            <div className="current__options">
                {Object.keys(data).map((key) => {
                    if (data[key]) {
                        return (
                            <span key={key} className="current__item">
                                {data[key]}
                                {/* <button
                                    className="delete__button"
                                    onClick={() => handleDelete(key)}
                                >
                                    <img className="delete_button" src={close} alt="delete-button" />
                                </button> */}
                            </span>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default CurrentApplicationBox;
