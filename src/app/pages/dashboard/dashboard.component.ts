import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'prueba-twinny';
  stats: any[] = [];
  isOpenSidebar: boolean = false;
  username: string | null= null;

  constructor(private appServices: AppService) {
    if(window.screen.width > 768) {
      this.isOpenSidebar = true;
    }
  }

  ngOnInit(){
    
    this.appServices.getStats().subscribe((response: any) => {
      this.stats = response.body;
      console.log("probando stats ",this.stats);
    });

    this.appServices.getUserName().subscribe((response: any) => {
      this.username = response.body.name;
    });
  }

  openSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

}
