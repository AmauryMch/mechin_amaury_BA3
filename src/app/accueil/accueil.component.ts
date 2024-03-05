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

  quantityForm = new FormControl("");

  constructor(private ecommerceService: EcommerceService, private epanierservice: EpanierServiceService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.ecommerceService.getAllArticles().subscribe((data: any) => {
      this.articles = data;
    })
  }

  addToCart(article: IArticle) {
    if (Number(this.quantityForm.value) === 0) {
      alert('Vous devez entrez une quantité');
    } else {
      this.epanierservice.addToCart(article, Number(this.quantityForm.value));
      alert("L'article " + article.Name + " a été ajouté au panier en quantité x" + this.quantityForm.value);
      this.quantityForm.setValue("0");
    }
  }

}
