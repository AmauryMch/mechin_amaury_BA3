import { Component, OnInit } from '@angular/core';
import { EpanierServiceService } from '../services/epanier-service.service';
import { IArticlePanier } from '../interfaces/articlePanier.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  articlesPanier!: IArticlePanier[];

  constructor(private epanierservice: EpanierServiceService) { }

  ngOnInit(): void {
    this.articlesPanier = this.epanierservice.getPanier();
  }

}
