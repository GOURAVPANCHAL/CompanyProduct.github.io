import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';



  constructor() {
    // this.UserdataService.getUserData().subscribe(data => {
    //   console.log(data);

    // })

  }


}
