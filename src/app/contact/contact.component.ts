import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:any= FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const bannerPImage = document.getElementsByClassName("inner-banner")[0] as HTMLDivElement;
   if(bannerPImage){
      bannerPImage.style.backgroundImage = "url(../assets/Images/die.png)";
    }
    this.createContactForm();   
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      name: [''],  
      email: [''],
      msg: [''],
      mobile:[''],
      city:['']
    });
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

 submit(){
  console.log(this.contactForm.name);
 }
 
}
