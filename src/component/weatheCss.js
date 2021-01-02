import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { css } from '@emotion/core';


// STEP 1：匯入 Emotion 提供的 css 函式   import { css } from '@emotion/core';
// STEP 2：將一批 CSS 樣式定義成 JavaScript 函式
const buttonDefault = (props) => css`
  display: block;
  width: 120px;
  height: 30px;
  font-size: 14px;
  background-color: transparent;
  color: ${props.theme === 'dark' ? '#dadada' : '#212121'};
`;
// STEP 3 在定義 Styled Components 時載入定義好的 CSS 樣式
// 和 CSS 一樣，同樣的樣式後面寫的會覆蓋前面寫的
const rejectButton = styled.button`
  ${buttonDefault}
  background-color: red;
`

const acceptButton = styled.button`
  ${buttonDefault}
  background-color: green;
`


// 透過 styled(組件) 來把樣式帶入已存在的組件中

// const Cloudy = styled(CloudyIcon)`
//   /* 在這裡寫入 CSS 樣式 */
//   flex-basis: 30%;
// `;

// const Redo = styled(RedoIcon)`
//   /* 在這裡寫入 CSS 樣式 */
//   width: 15px;
//   height: 15px;
//   position: absolute;
//   right: 15px;
//   bottom: 15px;
//   cursor: pointer;
// `;


const Container = styled.div`
  background-color: #ededed;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px;
`;

const Location = styled.div`
  font-size: 28px;
  color: ${props => props.theme === 'dark' ? '#dadada' : '#212121'};
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #828282;
  margin-bottom: 30px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Temperature = styled.div`
  color: #757575;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;