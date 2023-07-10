import { Component,OnInit } from '@angular/core';
import { WeatherhttpService } from 'src/app/Services/weatherhttp.service';
import { WeatherData } from '../models/weather.model';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private WeatherhttpService: WeatherhttpService) {}


weatherData?: WeatherData;
cityName: string = 'Budapest';

ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.WeatherhttpService.getWeatherData(cityName)
  .subscribe({
      next: (response) => {
      this.weatherData = response;
      console.log(response);
      // console.log(typeof this.weatherData)
      // console.log(this.weatherData)
      }

  });}

}