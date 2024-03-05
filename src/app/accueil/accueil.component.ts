import { Component } from '@angular/core';
import { EleguenService } from '../services/eleguen.service';
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

  constructor(private eleguenService: EleguenService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.eleguenService.getAllArticles().subscribe((data: any) => {
      this.articles = data.results;
    })
  }
}
