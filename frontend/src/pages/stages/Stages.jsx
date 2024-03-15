
import './Stages.css'

function Stages() {
    return (
        <>
            <h1 className="title">Этапы создания заявки</h1>

            <div className="stages">
                <div className="stage">
                    <h2>1</h2>
                    <p>Опишите вакансию</p>
                    <p>Сфера деятельности, график работы, соцпакет</p>
                </div>
                <div className="stage">
                    <h2>2</h2>
                    <p>Обозначьте требования к кандидату</p>
                    <p>Опыт работы, образование, портфолио</p> </div>

                <div className="stage">
                    <h2>3</h2>
                    <p>Укажите условия работы</p>
                    <p>Сроки закрытия вакансии, фриланс или кадровые агенства</p>
                </div>

                <div className="stage">
                    <h2>4</h2>
                    <p>Выберите форму оплаты</p>
                    <p>Договорная или фиксированная оплата, сроки выплаты вознаграждения</p>
                </div>

            </div>

            <button className="button" htmlType="submit">Далее</button>
        </>
    )
}

export default Stages;
