import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private url = environment.API_ENDPOINT;

  headers: any = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  getIcons = () => {
    return this.http.get<Config>(`${this.url}icons/`, {
      headers: this.headers,
    });
  };
}
