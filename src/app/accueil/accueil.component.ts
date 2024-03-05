import { Component } from '@angular/core';
import { EleguenService } from '../eleguen.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  articles: any;
  classes: any;

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
