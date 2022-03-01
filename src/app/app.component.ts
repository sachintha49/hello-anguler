import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price = 120;
  discount = 30;
  title = "Hello Angular I am a property!"

  shouldHighlight(): boolean{
    return (this.discount > 25);
  }

  priceChecker(): string{
    const finalPrice = this.price - (this.price *  this.discount / 100);
    return finalPrice > 100 ? 'lightgreen' : 'lightblue';
  }
  /* updatePrice(price: string) {
     this.price = +price;
   }

   updateDiscount(discount: string) {
     this.discount = +discount;
   }*/
  changeToolTipHeader() {
    this.title = "Hi sachintha oya meka wenas kala!";
  }
}
