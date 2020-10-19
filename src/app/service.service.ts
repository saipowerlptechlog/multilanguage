
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleObj } from './views/dashboard/model/Google.obj';

@Injectable({
  providedIn: 'root'
})

export class GoogletranslateService {


  url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDagBKWwWosXN-4VtTErnScDPoVEztLLwA";

  //key = "AIzaSyC2NR6Kd-UKT7VekzioEULFtuylp1XEKKA";
  constructor(private http: HttpClient) { }
  translate(obj: GoogleObj): Observable<any>  {
    console.log(obj)
  return this.http.post(this.url , obj);
  }}
