import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppInformation} from '../app-information';

@Injectable({
  providedIn: 'root'
})
export class AppInformationService {

  constructor(private readonly http: HttpClient) {
  }

  getAppInformation(): Observable<AppInformation> {
    return this.http.get<AppInformation>('/api');
  }
}
