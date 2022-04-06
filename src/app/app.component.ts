import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetcorsService } from './getcors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cors-enabled';
  message !: String;

  constructor(private http: HttpClient, private cors:GetcorsService){}

  ngOnInit():void{
    this.cors.getCors().subscribe(data=>{
      this.message = data
      console.log(data)
    });
  }

}
