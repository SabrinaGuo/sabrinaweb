import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RedoIcon } from './images/refresh.svg';

const Weather = () => {
    const [weatherElement, setWeatherElement] = React.useState({
        observationTime: new Date(),
        locationName: '',
        humid: 0,
        temperature: 0,
        windSpeed: 0,
        description: '',
        weatherCode: 0,
        rainPossibility: 0,
        comfortability: '',
    });


    // 透過 async 和 Promise 拉取並等待資料回應
    // 第一個部分主要是拉取資料，做法會像這樣：

    // 在 useEffect 的函式中定義 async function，取名為 fetchData，在這個 function 中會同時呼叫兩道 fetch API
    // 由於 fetch API 本身就會回傳 Promise，因此透過 async function 中的 await 語法搭配 Promise.all就可以等待 fetch API 的資料都回應後才讓程式碼繼續往後走
    // fetch API 原本就會回傳 Promise，因此在 fetchCurrentWeather 和 fetchWeatherForecast 中，不是只是呼叫 fetch 方法，而是把 fetch 方法呼叫後得到的 Promise 回傳出去
    // 在 fetchCurrentWeather 和 fetchWeatherForecast 的函式中，不直接去 setWeatherElement 而是把取得的資料回傳出去
    // 記得要在 useEffect 中執行定義好的 fetchData 這個函式



    React.useEffect(() => {
        // STEP 1：在 useEffect 中定義 async function 取名為 fetchData
        const fetchData = async () => {
            // STEP 2：使用 Promise.all 搭配 await 等待兩個 API 都取得回應後才繼續
            const [currentWeather,weatherForecast] = await Promise.all([
                 // STEP 6：使用陣列的解構賦值把資料取出
                fetchCurrentWeather(),
                fetchWeatherForecast(),
            ]);
            // console.log('data',currentWeather,'ppp',weatherForecast);
              // STEP 7：把取得的資料透過物件的解構賦值放入
            setWeatherElement({
                ...currentWeather,
                ...weatherForecast,
            });
        }
        // STEP 5：呼叫 fetchData 這個方法
        fetchData();

    }, []);

    const fetchCurrentWeather = () => {
         // STEP 3-1：加上 return 直接把 fetch API 回傳的 Promise 回傳出去
       return fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北')// 向 requestURL 發送請求 ex 氣象局
            .then((res) => res.json())
            .then((data) => {
                const locationData = data.records.location[0];
                const weatherEle = locationData.weatherElement.reduce(
                    (neededEle, item) => {
                        if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
                            neededEle[item.elementName] = item.elementValue;
                        }
                        return neededEle;
                    },
                    {}
                )
               
                 // STEP 3-2：把取得的資料內容回傳出去，而不是在這裡 setWeatherElement
                return {
                    observationTime: locationData.time.obsTime,
                    locationName: locationData.locationName,
                    temperature: weatherEle.TEMP,
                    windSpeed: weatherEle.WDSD,
                    humid: weatherEle.HUMD,
                }
            })

    }
    const fetchWeatherForecast = () => {
       // STEP 4-1：加上 return 直接把 fetch API 回傳的 Promise 回傳出去
        return  fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北市')// 向 requestURL 發送請求 ex 氣象局
            .then((res) => res.json())
            .then((data) => {
              
                const locationData = data.records.location[0];
                const weatherEle = locationData.weatherElement.reduce(
                    (neededEle, item) => {
                      
                        if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                            neededEle[item.elementName] = item.time[0].parameter; 
                        }
                    
                        return neededEle;
                    },
                    {}
                )
                 // STEP 4-2：把取得的資料內容回傳出去，而不是在這裡 setWeatherElement
                return {
                    description: weatherEle.Wx.parameterName,
                    weatherCode: weatherEle.Wx.parameterValue,
                    rainPossibility: weatherEle.PoP.parameterName,
                    comfortability: weatherEle.CI.parameterName,
                };
            })

    }
    return (
        <Container>
            <WeatherCard>
                <Location theme="">{weatherElement.locationName}</Location>
                <Description>
                    {weatherElement.description} {weatherElement.comfortability}
                </Description>
                <CurrentWeather>
                    <Temperature>
                        {Math.round(weatherElement.temperature)} <Celsius>°C</Celsius>
                    </Temperature>
                    <Cloudy />
                </CurrentWeather>
                <AirFlow>
                    <AirFlowIcon />
                    {weatherElement.windSpeed}m/h
              </AirFlow>
                <Rain>
                    <RainIcon />
                    {weatherElement.rainPossibility}%
              </Rain>
                <Redo onClick={() => {
                    fetchCurrentWeather();
                    fetchWeatherForecast();
                }}>
                    最後觀測時間:
                {new Intl.DateTimeFormat('zh-TW', {
                    hour: 'numeric',
                    minute: 'numeric',
                }).format(new Date(weatherElement.observationTime))}{' '}
                    <RedoIcon />
                </Redo>
            </WeatherCard>
        </Container>
    )
}
export default Weather;

// 匯入 Emotion 提供的 css 函式   import { css } from '@emotion/core';
// 將一批 CSS 樣式定義成 JavaScript 函式
const buttonDefault = (props) => css`
  display: block;
  width: 120px;
  height: 30px;
  font-size: 14px;
  background-color: transparent;
  color: ${props.theme === 'dark' ? '#dadada' : '#212121'};
`;
//在定義 Styled Components 時載入定義好的 CSS 樣式
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

const Cloudy = styled(CloudyIcon)`
  /* 在這裡寫入 CSS 樣式 */
  flex-basis: 30%;
`;



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
const Redo = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: #828282;

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;