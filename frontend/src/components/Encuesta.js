import React from 'react';
import './Encuesta.css';

function Survey(){
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = e => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  return(
    <div className="container--survey">
      <p className="instructions">
        Evalúe de 1 a 4, donde 1 es <strong>nunca</strong> y 4 es <strong>siempre</strong>
      </p>
      <div className="eje">
        <p className="ejeName">
          Propósitos:
        </p>
        <p>
          Usted usa información del entorno competitivo para:
        </p>
      </div>
      <div>
        <div className="container__calification">
          <div className="calification">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
          </div>
        </div>
        <div className="question1">
          <div>
            <p className="question--name">
              Dedicación de tiempo para búsqueda de información
            </p>
          </div>
          <div className="container--form">
            <form className="form">
              <div className="radio">
                <label>
                  <input 
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className="radioButton"/>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input 
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className="radioButton"
                  />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                    className="radioButton"
                  />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input 
                    type="radio"
                    value="option4"
                    checked={selectedOption === "option4"}
                    onChange={handleChange}
                    className="radioButton"/>
                </label>
              </div>
            </form>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Survey;