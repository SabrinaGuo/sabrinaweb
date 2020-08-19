import React from 'react';
import ReactDOM from 'react-dom';
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
  const {inputValue} = props;
  let standard;

  if (!inputValue) {
    standard = {
      title : '---',
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
      style={{backgroundColor:standard.backgroundColor}}
    >{standard.title}</div>
  )
}


const NetSpeedConverter = () => {
  //監控使用者於input中輸入東西 監聽input的 onChange
  const [inputValue, setInputValue] = React.useState(0);
  //取得input的value
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  return (
    // 輸入 Mbps 自動轉換成 MB/s
    // 根據輸入的數字不同，最下方會呈現不同的樣式和文字說明
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
              // 1 Mbps = 0.125 MB/s ，也就是 Mbps 的值除以 8 才會是 MB/s
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
  box-shadow: 1px 1px 10px 1px #333;
  border-radius: 7px;
  background: white;
  max-width: 440px;
  width:100%;
  min-height: 320px;
  margin:15px auto;


.card-header {
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
  flex: 1;
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
}

.converter-title {
  color: #a8aeba;
  font-weight: bold;
  margin-bottom: 12px;
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
  flex: 1;
  display: inline-block;
  background: transparent;
  border: none;
  outline: none;
  font-family: Courier;
  color: #2d7bee;
  font-weight: bold;
}

.text-right {
  text-align: right;
}
.flex-1 {
  flex: 1;
}

`