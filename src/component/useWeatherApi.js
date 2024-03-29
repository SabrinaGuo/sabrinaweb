import React from 'react';

const fetchCurrentWeather = (locationName) => {
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=${locationName}`)
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
const fetchWeatherForecast = (cityName) => {
    return fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F86B7ED3-2F5E-4BC9-BB43-025BE731A1BC&locationName=${cityName}`)
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

const useWeatherApi = (currentLocation) => {
    const { locationName, cityName } = currentLocation;
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
        isLoading: true,
    });

    const fetchData = React.useCallback(() => {
        const fetchingData = async () => {
            const [currentWeather, weatherForecast] = await Promise.all([
                //locationName 是給「觀測」天氣資料拉取 API 用的地區名稱
                //cityName 是給「預測」天氣資料拉取 API 用的地區名稱
                fetchCurrentWeather(locationName),
                fetchWeatherForecast(cityName),
            ]);
            setWeatherElement({
                ...currentWeather,
                ...weatherForecast,
                isLoading: false,
            });
        }
        setWeatherElement((prevState) => ({
            ...prevState,
            isLaoding: true,
        }))
        fetchingData();
    }, [locationName, cityName]);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return [weatherElement, fetchData];
}
export default useWeatherApi;