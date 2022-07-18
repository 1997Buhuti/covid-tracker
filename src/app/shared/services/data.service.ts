import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;
  getSummaryData() {
    return this.http.get(`${this.apiUrl}/summary`);
  }

  getCountryDataByDate(country: string, date: string) {
    return this.http.get(`${this.apiUrl}/${country}/status/confirmed?${date}`);
  }
}
