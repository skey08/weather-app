import React, {Component} from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = `ea00b6e1bba2077e75c22d7892a03297`;

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    const api_call = await fetch(URL);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      let conditions = data.weather.map((condition) => {
        return <li>{condition.description}</li>
      })
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: conditions,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter the values"
      })
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
