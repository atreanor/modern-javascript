class Weather {
  constructor(city, state) {
    this.apiKey = ;
    this.city = city;
    //this.state = state;
  }

  // fetch weather from API using asnyc
  async getWeather() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${this.apiKey}`)

  }
}