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
                <h2 className="current__title">{data.name}</h2>
                {/* <img src={check} className="current__check" /> */}
                <div className="current__options">
                    {visibleData.map(key => (
                        <p key={key}>{data[key]}</p>
                    ))}
                    {data.skill && data.skill.length > 0 && (
                        <div className="current__skills">
                            {data.skill.map((skill, index) => (
                                <span key={index} className="current__chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default CurrentApplicationBox;
