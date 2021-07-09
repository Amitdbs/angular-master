import { Component, HostListener, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll($event: any){
     var header = document.getElementById("myHeader") as HTMLDivElement;
     // Get the offset position of the navbar
     var sticky = header.offsetTop;
     // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
     if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          var navElement = header.firstElementChild.firstElementChild.firstElementChild as HTMLUnknownElement;
          navElement.style.backgroundColor = "#000006e8";
      } else {
          header.classList.remove("sticky");
          var navElement = header.firstElementChild.firstElementChild.firstElementChild as HTMLUnknownElement;
          navElement.style.backgroundColor = "#0000009c";
      }
  } 

}
