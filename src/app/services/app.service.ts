import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL: string = `https://apimocha.com/test-twinny`;

  constructor(
    private http: HttpClient
  ) { }

  getStats() {

    return this.http.get<any[]>(
      `${this.API_URL}/stats`,
      {observe: "response"}
    ).pipe(
      retry(3),
      map((response: HttpResponse<any>) => {
        return response;
      })
    )
  }
}
