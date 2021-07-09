import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

 public navigateToSection(section: string) {
   window.location.hash = '';
   window.location.hash = section;
}

showProduct(productId:any){
  this.router.navigateByUrl(`/products/${productId}`);
}

showAllProduct(){
  this.router.navigateByUrl(`products/list/all`);
}

}
