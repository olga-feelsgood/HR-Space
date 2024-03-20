import './CurrentApplicationBox.css';
import check from '../../images/check.svg'

function CurrentApplicationBox() {
    return (
        <>
            <div className="current__container">
                <h2 className="current__title">Текущая заявка</h2>
                <img src={check} className="current__check" />
                <p> </p>
            </div>
        </>
    )
}

export default CurrentApplicationBox;
