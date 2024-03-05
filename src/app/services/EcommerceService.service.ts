import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http: HttpClient) { }

  private apiRoute: any = {
    articles: "https://www.eleguen.ovh/api/v1/articles",
  }

  public getAllArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.apiRoute.articles)
  }
}
