import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import sunriseAndSunsetData from './sunrise-sunset.json';
import { ThemeProvider } from 'emotion-theming';
import WeatherCard from './WeatherCard';
import useWeatherApi from './useWeatherApi';
import WeatherSetting from './WeatherSetting';
import { findLocation } from './utils';

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
  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp ? 'day' : 'night';
};
const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};

const Weather = () => {
  // 儲存資料
  // localStorage.setItem(keyName, keyValue);

  // 讀取特定資料
  // localStorage.getItem(keyName);

  // 清除特定資料
  // localStorage.removeItem(keyName);

  // 清除全部資料
  // localStorage.clear();

  // 從 localStorage 取出 cityName，並取名為 storageCity
  const storageCity = localStorage.getItem('cityName');
  // 若 storageCity 存在則作為 currentCity 的預設值，否則使用 '臺北市'
  const [currentCity, setCurrentCity] = React.useState(storageCity || '臺北市');
  const currentLocation = findLocation(currentCity) || {};

  const [weatherElement, fetchData] = useWeatherApi(currentLocation);
  const [currentTheme, setCurrentTheme] = React.useState('light');
  const [currentPage, setCurrentPage] = React.useState('WeatherCard');



  // 當 currentCity 有改變的時候，儲存到 localStorage 中
  React.useEffect(() => {
    localStorage.setItem('cityName', currentCity);
    // dependencies 中放入 currentCity
  }, [currentCity]);

  // const moment = React.useMemo(() => getMoment(weatherElement.locationName), [weatherElement.locationName]);
  const moment = React.useMemo(() => getMoment(currentLocation.sunriseCityName), [
    currentLocation.sunriseCityName,
  ]);



  // 根據 moment 決定要使用亮色或暗色主題
  React.useEffect(() => {
    setCurrentTheme(moment === 'day' ? 'light' : 'dark');
    // 記得把 moment 放入 dependencies 中
  }, [moment]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      < Container >
        {currentPage === 'WeatherCard' && (
          <WeatherCard
            weatherElement={weatherElement}
            moment={moment}
            fetchData={fetchData}
            setCurrentPage={setCurrentPage}
            cityName={currentLocation.cityName}
          />
        )}

        {currentPage === 'WeatherSetting' && (
          <WeatherSetting
            setCurrentPage={setCurrentPage}
            cityName={currentLocation.cityName}
            setCurrentCity={setCurrentCity}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container >
    </ThemeProvider >
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
  background-color:${({ theme }) => theme.backgroundColor};
`;
