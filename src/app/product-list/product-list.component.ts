import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showProductDetail:boolean = false;
  prodId:any;
  parmsObj: any;
  constructor(private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.parmsObj = params.all; 
    })
  }

  @HostListener('window:scroll', ['$event']) onScroll($event: any){
    var header = document.getElementById("myHeader") as HTMLDivElement;
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
     } else {
         header.classList.remove("sticky");
     }
 } 

  showProduct(productId:any){
    this.prodId = productId;
    this.router.navigate([`/products/${productId}`]);
  }

}
