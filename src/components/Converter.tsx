import React, { useState } from 'react';
import '../styles/converter.scss';
import { CurrencyConvert } from '../types/types';

interface Props {
  converter: CurrencyConvert;
}

const Converter: React.FC<Props> = ({ converter }) => {
  console.log(converter);
  const [input, setInput] = useState<number>();
  const [output, setOutput] = useState<number>();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInput(+value);
  }

  const handleChangeOutput = () => {
    setOutput(input && input * converter.result)
  }

  return (
    <div className='converter'>
      <div className="converter__item">
        <span>Меняю</span>
        <div className='converter__itemValue'>
          <input
            name="input"
            min="0"
            type="number"
            value={input}
            placeholder="Enter the amount"
            onChange={handleChangeInput}
          />
          <div className='converter__currency'>
            {converter.query.from}
          </div>
        </div>
      </div>
      <div className='converter__arrowsImage'></div>
      <div className="converter__item">
        <span>Получаю</span>
        <div className='converter__itemValue'>
        <input 
          type="text"
          value={output}
          readOnly
        />
          <div className='converter__currency'>
            {converter.query.to}
          </div>
        </div>
      </div>

      <button
        className='converter__button'
        id='calculate'
        onClick={handleChangeOutput}
      >
        Расчитать
      </button>
    </div>
  ) ;
}

export default Converter;
