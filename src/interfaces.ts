export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Current {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: Condition;
}

export interface Hour {
    time_epoch: number;
    time: string;
    temp_c: number;
    condition: Condition;
    wind_kph: number;
    humidity: number;
    uv: number;
}

export interface ForecastDay {
    date: string;
    date_epoch: number;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        avghumidity: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: number;
        condition: Condition;
        uv: number;
    };
    astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
    };
    hour: Hour[];
}

export interface CityWeather {
    id: string;
    city: string;
    current: Current;
    forecast: ForecastDay[];
    pinned: boolean;
}


export interface WeatherState {
    cities: CityWeather[]
    loading: boolean
    error: string | null
}
