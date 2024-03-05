import { Component } from '@angular/core';
import { EcommerceService } from '../services/ecommerceService.service';
import { EpanierServiceService } from '../services/epanier-service.service';
import { NgFor, NgIf } from '@angular/common';
import { IArticle } from '../interfaces/article.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  articles!: IArticle[];

  quantityForm = new FormControl("1");

  constructor(private ecommerceService: EcommerceService, private epanierservice: EpanierServiceService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.ecommerceService.getAllArticles().subscribe((data: any) => {
      this.articles = data;
    })
  }

  addToPanier(article: IArticle) {
    if (Number(this.quantityForm.value) <= 0) {
      alert('Vous devez entrer une quantité !');
    } else {
      const existingArticlePanier = this.epanierservice.articlesPanier.findIndex(item => item['Unique Entry ID'] === article['Unique Entry ID']);
      if (existingArticlePanier !== -1) {
        this.epanierservice.getPanier()[existingArticlePanier].quantity += Number(this.quantityForm.value);
        this.epanierservice.getPanier()[existingArticlePanier].totalPrice +=
          Number(this.quantityForm.value) * this.epanierservice.getPanier()[existingArticlePanier].price;
        alert("La quantité de l'article " + article.Name + " a été mise à jour dans le panier x" + this.quantityForm.value);
      } else {
        this.epanierservice.addToPanier(article, Number(this.quantityForm.value));
        alert("L'article " + article.Name + " a été ajouté au panier en quantité x" + this.quantityForm.value);
      }
      this.quantityForm.setValue("1");
    }
  }

  removeFromPanier(article: IArticle) {
    const index = this.epanierservice.articlesPanier.findIndex(item => item['Unique Entry ID'] === article['Unique Entry ID']);
    if (index !== -1) {
      this.epanierservice.articlesPanier.splice(index, 1);
    }
  }

  isArticleInPanier(article: IArticle): boolean {
    return this.epanierservice.articlesPanier.some(item => item['Unique Entry ID'] === article['Unique Entry ID']);
  }


}
