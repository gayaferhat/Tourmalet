import {Component} from '@angular/core';
import {AppInformationService} from './services/app-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  version!: string;

  constructor(private appService: AppInformationService) {

    this.appService.getAppInformation().subscribe(data => {
      this.name = data.name;
      this.version = data.version;
    });
  }
}
