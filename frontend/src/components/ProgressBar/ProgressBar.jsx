import './ProgressBar.css'
import { useState } from 'react';
import progressbar from '../../images/progress-bar.svg';

function ProgressBar() {
  // const [progress, setProgress] = useState(0);

  // const handleClick = () => {
  // };

  return (
    <div>
      <h1 className="bar_title">Создание заявки</h1>
      <nav className="bar_nav">
        <ul className="bar_ul">
          <li className="bar_li" onClick={() => handleClick(0)}>
            <div className="progress_bar"><img src={progressbar} /></div>
            Опишите вакансию
          </li>
          <li className="bar_li" onClick={() => handleClick(1)}>
            <div className="progress_bar"><img src={progressbar} /></div>
            Требования к кандидату
          </li>
          <li className="bar_li" onClick={() => handleClick(2)}>
            <div className="progress_bar"><img src={progressbar} /></div>
            Условия работы
          </li>
          <li className="bar_li" onClick={() => handleClick(3)}>
            <div className="progress_bar"><img src={progressbar} /></div>
            Требования к рекрутеру
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ProgressBar;
