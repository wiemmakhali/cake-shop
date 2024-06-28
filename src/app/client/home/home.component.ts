import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [
    {
      imgSrc: 'assets/images/carouselproduits/cheese-cake.jpg',
      title: 'Cheesecake',
      description: 'Delicious cheesecake with fresh berries.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/mini-cake.jpg',
      title: 'Mini Cake & Lunch Box',
      description: 'Perfect mini cakes for your lunch box.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/ready-cakes.jpg',
      title: 'Ready Cakes',
      description: 'Homemade cakes for all occasions.'
    },
  
    {
      imgSrc: 'assets/images/carouselproduits/decorated-cakes.jpg',
      title: 'Decorated Cakes',
      description: 'Beautifully decorated cakes for special occasions.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/gift-box.jpg',
      title: 'Gift Box',
      description: 'Gift boxes filled with delicious treats.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/cake-pieces.jpg',
      title: 'Cake Pieces',
      description: 'Colorful and delightful cake pieces.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
