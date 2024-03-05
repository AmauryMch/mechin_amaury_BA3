import { Component } from '@angular/core';
import { EcommerceService } from '../services/ecommerceService.service';
import { NgFor, NgIf } from '@angular/common';
import { IArticle } from '../interfaces/article.interface';
import { IArticlePanier } from '../interfaces/articlePanier.interface';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  articles!: IArticle[];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.ecommerceService.getAllArticles().subscribe((data: any) => {
      this.articles = data;
    })
  }

}
