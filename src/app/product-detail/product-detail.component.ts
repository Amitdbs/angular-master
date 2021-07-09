import { Component, HostListener, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productJSONData:any =[{
    "productId":1,
    "overviewInfo": "The most common type of springs that comes to mind when thinking of springs. Compression springs as the name suggest will compress when loaded and are used in a variety of applications.There are many kinds of compression spring such as straight body compression spring, conical spring, variable diameter. Compression spring also can be  closed ended , open ended, pig tailed and open reduced on centre . The ends can also be grounded to exact specifications also We at Asha springs have spent almost half a decade studying and manufacturing such springs. Compression springs can be made by cold winding and hot winding depending on the wire diameter of the spring required. We have an  inhouse capacity to manufacture compression spring with wire diameter of 0.10mm-25.00mm.",
    "overviewImage": "../assets/Images/comp.png",
    "image": "../assets/Images/comp.png",
    "header": "Compression Spring",
    "materialInfo":"Spring steel is considered a general use steel because of its ability to be durable, yet flexible with a high degree of strength. It has the unique ability to be formed, shaped, and post heat treated, which makes it one of the premium choices for manufacturing springs for automotive, auto electrical and electrical applications.Stainless steel is good for corrosion resistant and Inconel is best for springs being used at very high temperatures.When it comes to springs that are required to be non-magnetic, Stainless Steel 316 can be used. This material type isn’t 100% non-magnetic though. Stainless steel 316 is only 90% non-magnetic.",
    "materialImage":"../assets/Images/spiral.png",
    "finishInfo":"Compression Springs are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation.Stainless Steel Springs are available with Bright Finish",
    "finishImage":"../assets/Images/die.png",
    "manfProcess":"Compression Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
    "productApplication":"Automobile Components, Umbrella, Ball Pens, Switches, Switchgears, MCB, RCCB, ELCB, Photocopy & Printing Machine, Door & Luggage Locks, Gas Regulators, Lighters, Aerosol Valves & Pumps, Short & Long Core Auto Tube Valves, washing machines & refrigerator ,Textile machines, and many more."
  },{
    "productId":2,
    "overviewInfo": "Tension Springs/Extension Springs are helical wound coils, wrapped tightly together to create tension. Extension springs are springs which absorb and store energy by offering resistance to a pulling force. Extension springs usually have hooks, loops, or end coils that are pulled out and formed from each end of the body. The function of an extension spring is to provide extended force when the spring is pulled apart from its original length.",
    "overviewImage": "../assets/Images/clutch.png",
    "image": "../assets/Images/clutch.png",
    "header": "Extension Spring",
    "materialInfo":"The most common material types for extension springs are music wire, hard drawn, stainless steel (type 302 and type 316), oil tempered, chrome silicon, and phosphor bronze.",
    "materialImage":"../assets/Images/spiral.png",
    "finishInfo":"Compression Springs are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation.Stainless Steel Springs are available with Bright Finish",
    "finishImage":"../assets/Images/die.png",
    "manfProcess":"Tension Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
    "productApplication":"Automotive interiors and exteriors, Garage Door Assembles, Vise-Grip Pliers, Carburettors, Trampolines, Farm Machinery, Relays, Switches, Switchgears, Rotary Switch, Window & Car Curtains, Photocopy & Printing Machine, Stapler Pin Machines, Washing Machine, Hardware Locks & Handles, Textile Machinery, Looms, Toys & any type of spring tensioning device."
    },
    {
      "productId":3,
      "overviewInfo": "The main difference between an compression spring and an extension spring is in the direction of application of the load and the way that it is applied. Extension springs absorb energy or create resistance depending on the application We at Asha springs can manufacture extension springs such as small extension springs, large extension springs, conical extension spring we can produce any kind of extension spring depending upon the customer specifications and configurations.",
      "overviewImage": "../assets/Images/bwire.png",
      "image": "../assets/Images/bwire.png",
      "header": "Garter Spring",
      "materialInfo":"The most common material types for extension springs are music wire, hard drawn, stainless steel (type 302 and type 316), oil tempered, chrome silicon, and phosphor bronze.",
      "materialImage":"../assets/Images/spiral.png",
      "finishInfo":"Compression Springs are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation.Stainless Steel Springs are available with Bright Finish",
      "finishImage":"../assets/Images/die.png",
      "manfProcess":"Extension Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
      "productApplication":"Automotive interiors and exteriors, Garage Door Assembles, Vise-Grip Pliers, Carburettors, Trampolines, Farm Machinery, Relays, Switches, Switchgears, Rotary Switch, Window & Car Curtains, Photocopy & Printing Machine, Stapler Pin Machines, Washing Machine, Hardware Locks & Handles, Textile Machinery, Looms, Toys & any type of spring tensioning device."
      },
      {
        "productId": 4,
        "overviewInfo": "Torsion spring are designed in such a way that it can supply and withstand torque. Torsion supply this torque through its arms/spring leg. Design of the spring leg depends on the application and can be straight or bent depending of the design of its application.We at Asha springs have latest technology cnc machines to manufacture such complex springs.",
        "overviewImage": "../assets/Images/torsion_spring.jpg",
        "image": "../assets/Images/torsion_spring.jpg",
        "header": "Torsion Spring",
        "materialInfo": "The most common material types for extension springs are music wire, hard drawn, stainless steel (type 302 and type 316), oil tempered, chrome silicon, and phosphor bronze.",
        "materialImage": "../assets/Images/spiral.png",
        "finishInfo": "Torsion Springs are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation. Stainless Steel Springs are available with Bright Finish.",
        "finishImage": "../assets/Images/torsion_spring.jpg",
        "manfProcess": "Torsion Springs are manufactured on imported CNC Spring Multi forming Machines with its angle control by air control sensing device.",
        "productApplication": "Automobile Components & Accessories, Hand Tools, Switches, Switchgears, Toys, Window & Car Curtains, , Doors and Hinges, Retractable Seating, Medical Equipment, All types of Locks, Photocopy & Printing Machine, Mouse Traps, Furniture & Hardware products, Clothing Pins, Stationary articles, amongst others."
        },
        {
          "productId": 5,
          "overviewInfo": "Die springs are same as compression spring but made out of Flat wire which can be Square/Rectangular in shape. Primarily used in die machineries die springs are designed in such a way that it can withstand a high static or load stresses in a tight index and to improve the springs life cycle and space efficiency of the design.Die springs are categorised in different colour codes depending on its sizes and load capacity. We use chrome alloy material to manufacture die spring which are equivalent to ISO-10243 and JIS STD.",
          "overviewImage": "../assets/Images/diesprings1.jpg",
          "image": "../assets/Images/diesprings1.jpg",
          "header": "Die Spring",
          "materialInfo": "Die Springs or High Force Compression Springs are made of pre-tempered, rectangular shaped chrome silicon wire.",
          "materialImage": "../assets/Images/spiral.png",
          "finishInfo": "Die Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
          "finishImage": "../assets/Images/diesprings1.jpg",
          "manfProcess": "Torsion Springs are manufactured on imported CNC Spring Multi forming Machines with its angle control by air control sensing device.",
          "productApplication": "Clutches & brakes in the Automotive Industry, Transportation Industry, Agricultural industry, Oil & Gas Drills, Aircraft Mechanics, various types of Moulds."
          },
          {
            "productId": 6,
            "overviewInfo": "Mainly used in the Blister packaging machines, rectangular springs/feeding springs are considered one of the most critical job to manufacture because of its lengths and tight tolerances. We at Asha springs are now the leading suppliers and manufacturers of feeding springs and supply to almost all the blister packaging machine manufacturer in the country. we have accomplished this fleet because of regular development in technology and our vision to provide our customers with the best quality product.",
            "overviewImage": "../assets/Images/feedingsprings1.jpg",
            "image": "../assets/Images/feedingsprings1.jpg",
            "header": "Feeding/Rectangular Spring",
            "materialInfo": "Die Springs or High Force Compression Springs are made of pre-tempered, rectangular shaped chrome silicon wire.",
            "materialImage": "../assets/Images/spiral.png",
            "finishInfo": "Die Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
            "finishImage": "../assets/Images/feedingsprings1.jpg",
            "manfProcess": "Torsion Springs are manufactured on imported CNC Spring Multi forming Machines with its angle control by air control sensing device.",
            "productApplication": "Clutches & brakes in the Automotive Industry, Transportation Industry, Agricultural industry, Oil & Gas Drills, Aircraft Mechanics, various types of Moulds."
            },
          {
            "productId": 7,
            "overviewInfo": "Garter springs are essentially helical springs with connected ends; it forms a circle to provide a strong radial force. Garter springs are basically extension springs or compression springs whose ends are connected to make a garter belt that will exert force from its inner diameter. Compression garter springs exert outward radial forces, while extension garter springs exert inward radial forces. Their design is crucial to guarantee maximum functionality, so it’s important that factors like where & how the spring will be used are taken into consideration. They are usually produced with Carbon steel or Stainless steel wire. Since they are able to withstand forces from all directions, they are effective at handling changes in volume, pressure, temperature & viscosity.",
            "overviewImage": "../assets/Images/garter.png",
            "image": "../assets/Images/garter.png",
            "header": "Garter Spring",
            "materialInfo": "High Carbon Spring Steel Wire,Stainless Steel 302, 304, 316",
            "materialImage": "../assets/Images/spiral.png",
            "finishInfo": "Bright finish or with plating.",
            "finishImage": "../assets/Images/die.png",
            "manfProcess": "Garter Springs are manufactured on imported CNC Spring Coiling Machines with SPC on line with free length sorting device for critical load value.",
            "productApplication": "The primary application is to maintain lip seal pressure on a shaft. Garter Springs used in oil seals, shaft seals, belt-driven motors, and electrical connectors."
            }]
  productData:any;
  productId:any;
  constructor(private router: Router,private activateRouter:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.activateRouter.params.subscribe(ele=>{
      this.productId=ele.id;
    });

    for(let i in this.productJSONData){
      if(this.productJSONData[i].productId == parseInt(this.productId)){
        this.productData = this.productJSONData[i];
        const bannerPImage = document.getElementsByClassName("inner-banner")[0] as HTMLDivElement;
        if(bannerPImage){
          bannerPImage.style.backgroundImage = "url("+this.productJSONData[i].image+")";
        }
      }
    }
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

}
