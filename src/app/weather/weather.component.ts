import { Component , OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent  implements OnInit{
  myWeather: any;
  temparature: number=0;
  tempmin : number=0;
  tempmax : number=0;
  humidity : number=0;
  pressure : number=0;
  wind : number=0;
  city : string='Chennai';
  // newCity : string='';
  



  constructor(private weatherService : WeatherService){

  }

  ngOnInit() : void {
    this.getWeatherData(this.city);
  }

  getWeatherData(city: string){
    this.weatherService.getweather(city).subscribe({
        next:(res)=> {
          console.log(res);
          this.myWeather = res;
          console.log(this.myWeather);
          this.temparature= this.myWeather.main.temp;
          this.tempmin=this.myWeather.main.temp_min;
          this.tempmax=this.myWeather.main.temp_max;
          this.humidity=this.myWeather.main.humidity;
          this.pressure=this.myWeather.main.pressure;
          this.wind=this.myWeather.wind.speed;
  
  
        },
        error:(error)=> console.log(error.message),
  
  
        complete:() => console.info('API Call Completed')
  
      })
    }

    onSearch(){
      this.getWeatherData(this.city)
}}