import React from 'react';
import styled from 'styled-components';

const UnitControl = () => {
  return (
    <div className="unit-control">
      <div className="unit">Mbps</div>
      <span className="exchange-icon fa-fw fa-stack">
        <i className="far fa-circle fa-stack-2x" />
        <i className="fas fa-exchange-alt fa-stack-1x" />
      </span>
      <div className="unit">MB/s</div>
    </div>

  )
}
const CardFooter = (props) => {
  const { inputValue } = props;
  let standard;

  if (!inputValue) {
    standard = {
      title: '---',
      backgroundColor: '#d3d8e2',
    };
  } else if (inputValue < 15) {
    standard = {
      title: 'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputValue < 40) {
    standard = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputValue >= 40) {
    standard = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }

  return (
    <div className="card-footer"
      style={{ backgroundColor: standard.backgroundColor }}
    >{standard.title}</div>
  )
}


const NetSpeedConverter = () => {
  const [inputValue, setInputValue] = React.useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  return (
    <NetCSS className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" className="input-number" min="0" onChange={handleInputChange} value={inputValue} />
          </div>
          <span
            className="angle-icon fa-2x"
            style={{
              marginTop: 30,
            }}
          >
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              className="input-number text-right"
              type="text"
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </NetCSS>

  )
}
export default NetSpeedConverter;

const NetCSS = styled.div`

  display: flex;
  flex-direction: column;
  border:1px solid #eee;
  border-radius: 7px;
  background: white;
  max-width: 440px;
  width:100%;
  min-height: 320px;
  margin:15px auto;
  box-sizing:border-box;

.card-header {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #2d7bee;
  color: white;
  font-size: 20px;
}

.card-body {
  padding: 30px;
}

.unit-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.unit {
  display: inline-flex;
  background-color: #2d7bee;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 35px;
  color: white;
  border-radius: 3px;
}

.exchange-icon {
  color: #a8aeba;
}

.angle-icon {
  color: #b0c9f6;
}

.converter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
       padding:0 15px;
  }
}

.converter-title {
  color: #a8aeba;
  font-weight: bold;
  margin-bottom: 12px;
  width:100%;
}

.card-footer {
  min-height: 40px;
  margin: 5px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #2d7bee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.input-number {
  font-size: 32px;
  max-width: 170px;
  display: inline-block;
  background: transparent;
  border: none;
  outline: none;
  font-family: Courier;
  color: #2d7bee;
  font-weight: bold;
  width:100%;
}

.text-right {
  text-align: right;
}
.flex-1 {
  width: 100%;
  max-width: 50%;
}

`