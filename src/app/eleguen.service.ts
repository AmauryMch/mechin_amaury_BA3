import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleguenService {

  constructor(private http: HttpClient) { }

  private apiRoute: any = {
    articles: "https://www.eleguen.ovh/api/v1/articles",
  }

  public getAllArticles(): Observable<Object> {
    return this.http.get(this.apiRoute.articles)
  }
}
