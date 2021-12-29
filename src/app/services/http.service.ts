import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ipAddress='192.168.0.116';
  identity='roZeTZPeBJpKOZWcmfX7ltbK81P-kt4pUK3xboED';

  baseUrl = `http://${this.ipAddress}/api/${this.identity}`

  constructor(private httpClient: HttpClient) { }


  getAllLights(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/lights`);
  }

  getAllGroups(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/groups`);
  }

  

  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}



