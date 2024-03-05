import { Component, OnInit } from '@angular/core';
import { EpanierServiceService } from '../services/epanier-service.service';
import { IArticlePanier } from '../interfaces/articlePanier.interface';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterOutlet],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  articlesPanier!: IArticlePanier[];

  constructor(private epanierservice: EpanierServiceService) { }

  ngOnInit(): void {
    this.articlesPanier = this.epanierservice.getPanier();
  }

  decreaseQuantity(article: IArticlePanier) {
    if (article.quantity > 1) {
      article.quantity--;
      article.totalPrice = article.quantity * article.price;
    }
  }

  increaseQuantity(article: IArticlePanier) {
    article.quantity++;
    article.totalPrice = article.quantity * article.price;
  }

  removeFromPanier(article: IArticlePanier) {
    const index = this.articlesPanier.indexOf(article);
    if (index !== -1) {
      this.articlesPanier.splice(index, 1);
    }
  }

  getTotalPrice(): number {
    return this.articlesPanier.reduce((total, article) => total + (article.totalPrice || 0), 0);
  }

  clearPanier() {
    this.epanierservice.clearPanier();
    this.articlesPanier = this.epanierservice.getPanier();
  }

}
