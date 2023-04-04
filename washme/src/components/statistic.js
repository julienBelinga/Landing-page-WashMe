import React, { useEffect } from 'react';

export default function Statistic(props) {

  useEffect(() => {
    const number = document.getElementById("number");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let target = (props.stat);
    let current = 0;
    const step = 42;

    const start = () => {
      right.classList.add("animate");
      update();
    };

    const updateValues = () => {
      const [first, ...rest] = current.toLocaleString("en-US").split(",").reverse();
      const thousands = rest.reverse();
      
      const thousandsString = thousands.join("");
      if (+left.innerText != thousandsString) {
        left.classList.add("animate");
      } else {
        left.classList.remove("animate");
      }
      left.innerText = thousandsString;
      right.innerText = first;
    };

    const update = () => {
      if (target - current > 0) {
        current += step;
      } else {
        current -= step;
      }
      updateValues();
      if (Math.abs(target - current) > step) {
        requestAnimationFrame(update);
      } else {
        requestAnimationFrame(() => {
          current = target;
          updateValues();
          left.classList.remove("animate");
          right.classList.remove("animate");
        });
      }
    };

    requestAnimationFrame(start);
  }, []);


  return (
    <div className='stat-container'>
        <div className="container">
          <datalist id="values">
            <option value="0" label="0"></option>
            <option value="5000" label="5000"></option>
            <option value="10000" label="10000"></option>
            <option value="15000" label="15000"></option>
            <option value={props.stat} label={props.stat}></option>
          </datalist>

          <div className="number" id="number">
            <div className="left" id="left"></div>
            <div className="right" id="right">0</div>
          </div>
        </div>

        <svg className="svgFilter" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="blurFilter">
              <feGaussianBlur id="blurFilterItem" in="SourceGraphic" stdDeviation="13,0" />
            </filter>
          </defs>
        </svg>
        <p>{props.description}</p>
    </div>
  )
}
