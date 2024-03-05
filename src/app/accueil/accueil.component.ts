import { Component } from '@angular/core';
import { EcommerceService } from '../services/EcommerceService.service';
import { NgFor } from '@angular/common';
import { IArticle } from '../interfaces/article.interface';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  articles!: IArticle;

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.ecommerceService.getAllArticles().subscribe((data: any) => {
      this.articles = data.results;
    })
  }
}
