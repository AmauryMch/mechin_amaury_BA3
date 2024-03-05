import { Injectable } from '@angular/core';
import { IArticlePanier } from '../interfaces/articlePanier.interface';
import { IArticle } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class EpanierServiceService {
  articlePanier: IArticlePanier[] = [];

  constructor() { }

  addToPanier(article: IArticle, quantity: number) {
    const articleAjoute: IArticlePanier = {
      'Unique Entry ID': article['Unique Entry ID'],
      Name: article.Name,
      quantity: quantity,
      price: article.Buy,
      totalPrice: quantity * article.Buy
    };

    this.articlePanier.push(articleAjoute);
  }

  getPanier() {
    return this.articlePanier;
  }

}
