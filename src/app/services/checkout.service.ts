import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { IArticlePanier } from '../interfaces/articlePanier.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  private apiRoute: any = {
    purchase: "https://www.eleguen.ovh/api/v1/purchase",
  }

  submitOrder(panier: IArticlePanier[], user: IUser): Observable<any> {
    const order = { panier: panier, user: user };
    return this.http.post(this.apiRoute.purchase, order);
  }

}
