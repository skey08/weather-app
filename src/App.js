import React, {Component} from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = `ea00b6e1bba2077e75c22d7892a03297`;
const URL = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`;

export default class App extends Component {

  getWather = async () => {
    const api_call = await fetch(URL);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}
