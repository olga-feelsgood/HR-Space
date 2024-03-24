import './CurrentApplicationBox.css';
import check from '../../images/check.svg'
import { useContext } from "react"
import FormContext from '../../context/FormContext';

function CurrentApplicationBox() {
    const { data } = useContext(FormContext);
    const maxVisibleItems = 4;

    const dataKeys = Object.keys(data);
    const visibleData = dataKeys.slice(0, maxVisibleItems);

    return (
        <>
            <div className="current__container">
                <h2 className="current__title">Текущая заявка</h2>
                <img src={check} className="current__check" />
                <div className="current__optionsma">
                    {visibleData.map(key => (
                        <p key={key}>{data[key]}</p>
                    ))}
                    {dataKeys.length > maxVisibleItems && (
                        <p>...</p>
                    )}
                </div>

            </div>
        </>
    )
}

export default CurrentApplicationBox;
