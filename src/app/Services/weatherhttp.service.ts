import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import {WeatherData } from '../Components/models/weather.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherhttpService {

  private url:string = 'https://api.weatherbit.io/v2.0/current';

  constructor(private http: HttpClient) { }
  
  getWeatherData(cityName:string): Observable<WeatherData> {
    return this.http.get<WeatherData> (this.url, {
      params: new HttpParams()
      .set('city', cityName)
      .set('key', '81fc28c5886a491cb83a36a23f3bd545')
      .set('mode', 'json')
    })
  }

 
}
