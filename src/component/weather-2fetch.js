import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RedoIcon } from './images/refresh.svg';

const Weather = () => {
    //定義會使用到的資料狀態
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
    // 優化時間呈現的部分，可以使用瀏覽器原生的 Intl 這個方法，這個方法的全名是 Internationalization API，
    // 它可以針對日期、時間、數字（貨幣）等資料進行多語系的呈現處理，相當方便
    // 優化溫度呈現的部分，則可以使用 Math.round() 做四捨五入即可




    //資料存取時間  第一次載入 以及 點擊刷新按鈕
    //第一次載入 useEffect()
    React.useEffect(() => {
        fetchCurrentWeather();
        fetchWeatherForecast();
       
        //注意無限迴圈
        //「特定時間」通常是「已經向 API 拉取過資料」或者「React 內的資料沒有變動」時 => 不要呼叫function
      },[]);
    //點擊刷新按鈕
  
    const fetchCurrentWeather = () => {
        //AJAX 請求 fetch API
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北')// 向 requestURL 發送請求 ex 氣象局
            .then((res) => res.json())// 取得伺服器回傳的資料並以 JSON 解析
            .then((data) => {// 取得解析後的 JSON 資料
                //資料整理
                const locationData = data.records.location[0];
                // console.log(locationData);
                const weatherEle = locationData.weatherElement.reduce(
                    (neededEle, item) => {
                        // console.log('ne',neededEle,'it',item);
                        //include 找出符合的element name (incloud 是回傳 T or F)
                        if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
                            neededEle[item.elementName] = item.elementValue;
                        }
                        // console.log('neededEle',neededEle);
                        return neededEle;
                    },
                    {}//reduce  假如 initialValue未被提供，reduce() 將會跳過第一個陣列索引，從陣列索引 1 開始執行回呼函式。若有提供 initialValue，則會由陣列索引 0 開始執行。
                )
                setWeatherElement((prevState)=>({
                    ...prevState,
                    observationTime: locationData.time.obsTime,
                    locationName: locationData.locationName,
                    description: '多雲時晴',
                    temperature: weatherEle.TEMP,
                    windSpeed: weatherEle.WDSD,
                    humid: weatherEle.HUMD,
                }))
            })

    }
    const fetchWeatherForecast = () => {
        //其他資料抓取
       fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北市')// 向 requestURL 發送請求 ex 氣象局
           .then((res) => res.json())// 取得伺服器回傳的資料並以 JSON 解析
           .then((data) => {// 取得解析後的 JSON 資料
               //資料整理
               const locationData = data.records.location[0];
            //    console.log(locationData);
               const weatherEle = locationData.weatherElement.reduce(
                   (neededEle, item) => {
                       console.log('ne',neededEle,'it',item);
                       //include 找出符合的element name (incloud 是回傳 T or F)
                       if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                           neededEle[item.elementName] = item.time[0].parameter; //找最近的時間 所以選擇[0]
                       }
                       // console.log('neededEle',neededEle);
                       return neededEle;
                   },
                   {}//reduce  假如 initialValue未被提供，reduce() 將會跳過第一個陣列索引，從陣列索引 1 開始執行回呼函式。若有提供 initialValue，則會由陣列索引 0 開始執行。
               )
               setWeatherElement((prevState) => ({
                   ...prevState,//取得原有的資料狀態 不然會直接把溫度那些資料覆蓋掉
                   description: weatherEle.Wx.parameterName,
                   weatherCode: weatherEle.Wx.parameterValue,
                   rainPossibility: weatherEle.PoP.parameterName,
                   comfortability: weatherEle.CI.parameterName,
                 }));
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