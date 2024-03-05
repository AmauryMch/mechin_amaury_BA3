import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IUser } from '../interfaces/user.interface';
import { CheckoutService } from '../services/checkout.service';
import { EpanierServiceService } from '../services/epanier-service.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  userForm: FormGroup;

  constructor(private epanierservice: EpanierServiceService, private checkoutService: CheckoutService) {
    this.userForm = new FormGroup({
      lastname: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required, Validators.pattern('[0-9]{5}')]),
      city: new FormControl("", [Validators.required]),
      card: new FormControl("", [Validators.required, Validators.pattern('[0-9]{16}')]),
      cardDate: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: IUser = this.userForm.value;
      console.log(user);
      this.checkoutService.submitOrder(user).subscribe(
        () => {
          console.log("Commande envoyée avec succès.");
        },
        (error) => {
          console.error("Une erreur est survenue lors de l'envoi de la commande :", error);
        }
      );
    }
  }

}
