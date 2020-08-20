import React from 'react';
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

    React.useEffect(() => {
        const fetchData = async () => {
            const [currentWeather,weatherForecast] = await Promise.all([
                fetchCurrentWeather(),
                fetchWeatherForecast(),
            ]);
            setWeatherElement({
                ...currentWeather,
                ...weatherForecast,
            });
        }
        fetchData();

    }, []);

    const fetchCurrentWeather = () => {
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



const Cloudy = styled(CloudyIcon)`
  flex-basis: 30%;
`;



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