import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { ConfigService } from './config.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http, private config: ConfigService) { }

  // Rest api for get method
  get(url: string): Observable<any> {
    return this.http.get(`${this.config.getBaseURL()}${url}`).pipe(map((response: any) => response.json()));
  }
}
