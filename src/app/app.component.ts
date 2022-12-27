import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueba-twinny';
  stats: any[] = [];

  constructor(private appServices: AppService) {}

  ngOnInit(){
    
    this.appServices.getStats().subscribe((response: any) => {
      this.stats = response.body;
      console.log("probando stats ",this.stats);
    });
  }


}
