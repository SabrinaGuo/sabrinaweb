import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import WeatherIcon from './WeatherIcon';
import sunriseAndSunsetData from './sunrise-sunset.json'
import { ReactComponent as CloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';
import { ReactComponent as LoadingIcon } from './images/loading.svg';


const fetchCurrentWeather = () => {
  return fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北')
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
  return fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=臺北市')
    .then((res) => res.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherEle = locationData.weatherElement.reduce(
        (neededEle, item) => {
          // console.log(item);
          if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
            neededEle[item.elementName] = item.time[0].parameter;
          }

          return neededEle;
        },
        {}
      )
      return {
        description: weatherEle.Wx.parameterName,
        weatherCode: weatherEle.Wx.parameterValue,
        rainPossibility: weatherEle.PoP.parameterName,
        comfortability: weatherEle.CI.parameterName,
      };
    })

}

const getMoment = (locationName) => {
  // STEP 2：從日出日落時間中找出符合的地區
  const location = sunriseAndSunsetData.find(
    (data) => data.locationName === locationName
  );

  // STEP 3：找不到的話則回傳 null
  if (!location) return null;

  // STEP 4：取得當前時間
  const now = new Date();

  // STEP 5：將當前時間以 "2019-10-08" 的時間格式呈現
  const nowDate = Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(now)
    .replace(/\//g, '-');

  // STEP 6：從該地區中找到對應的日期
  const locationDate =
    location.time && location.time.find((time) => time.dataTime === nowDate);

  // STEP 7：將日出日落以及當前時間轉成時間戳記（TimeStamp）
  const sunriseTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunrise}`
  ).getTime();
  const sunsetTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunset}`
  ).getTime();
  const nowTimeStamp = now.getTime();

  // STEP 8：若當前時間介於日出和日落中間，則表示為白天，否則為晚上
  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp
    ? 'day'
    : 'night';
};


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
    isLoading:true,
  });

  const {
    observationTime,
    locationName,
    temperature,
    windSpeed,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    isLoading,
  } = weatherElement;


  const fetchData = React.useCallback(() => {
    const fetchingData = async () => {
      const [currentWeather, weatherForecast] = await Promise.all([
        fetchCurrentWeather(),
        fetchWeatherForecast(),
      ]);
      setWeatherElement({
        ...currentWeather,
        ...weatherForecast,
        isLoading:false,
      });
    }
    setWeatherElement((prevState)=>({
      ...prevState,
      isLaoding:true,
    }))
    fetchingData();
  }, [])

  const moment = React.useMemo(()=>getMoment(weatherElement.locationName),[weatherElement.locationName]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <Container>
      <WeatherCard>
        <Location theme="">{locationName}</Location>
        <Description>
          {description} {comfortability}
        </Description>
        <CurrentWeather>
          <Temperature>
            {Math.round(temperature)} <Celsius>°C</Celsius>
          </Temperature>
          <WeatherIcon currentWeatherCode={weatherCode} moment={moment||'day'} />
        </CurrentWeather>
        <AirFlow>
          <AirFlowIcon />
          {windSpeed}m/h
              </AirFlow>
        <Rain>
          <RainIcon />
          {rainPossibility}%
              </Rain>
        <Refresh onClick={fetchData} isLoading={isLoading}>
          最後觀測時間:
                {new Intl.DateTimeFormat('zh-TW', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(observationTime))}{' '}
          {isLoading?<LoadingIcon/>:<RefreshIcon />}
        </Refresh>
      </WeatherCard>
    </Container>
  )
}
export default Weather;

const buttonDefault = (props) => css`
  display: block;
  width: 120px;
  height: 30px;
  font-size: 14px;
  background-color: transparent;
  color: ${props.theme === 'dark' ? '#dadada' : '#212121'};
`;
const rejectButton = styled.button`
  ${buttonDefault}
  background-color: red;
`
const acceptButton = styled.button`
  ${buttonDefault}
  background-color: green;
`
const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 360px;
  width:100%;
  margin:15px auto;
  box-sizing:border-box;
`;
const WeatherCard = styled.div`
  position: relative;
 
  border:1px solid #eee;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px;
  width:100%;
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
const Refresh = styled.div`
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
    animation: rotate infinite 1.5s linear;
    animation-duration:${({isLoading})=>(isLoading?'1.5s':'0s')};
  }
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;