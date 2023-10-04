import { Component, OnInit } from '@angular/core';
import { TeamSlider, TestimonialSlider } from 'src/app/shared/data/slider';

@Component({
  selector: 'app-become-vendor',
  templateUrl: './become-vendor.component.html',
  styleUrls: ['./become-vendor.component.scss']
})
export class BecomeVendorComponent implements OnInit {
  Step1 =false;
  Step2 =true;
  Step3 = false;
  imagePreviews: (string | null)[] = ['', '', '', ''];

  // Define an array of label texts
  labelArray: string[] = ['Image 1', 'Image 2', 'Image 3', 'Image 4' , 'Image 5', 'Image 6', 'Image 7' , 'Image 8'];

  onSelectFile(event: any, index: number) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e) => {
        this.imagePreviews[index] = e.target?.result as string;
      };
    }
  }

  clearImage(index: number) {
    this.imagePreviews[index] = '';
  }
  
  constructor() {
    
   }

  ngOnInit(): void {


    }
    public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/testimonial/1.jpg',
    name: 'Mark jkcno',
    designation: 'Designer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/testimonial/2.jpg',
    name: 'Adegoke Yusuff',
    designation: 'Content Writer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/testimonial/1.jpg',
    name: 'John Shipmen',
    designation: 'Lead Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }]

  // Team 
  public team = [{
    image: 'assets/images/team/1.jpg',
    name: 'Mark jkcno',
    designation: 'Designer'
  }, {
    image: 'assets/images/team/2.jpg',
    name: 'Adegoke Yusuff',
    designation: 'Content Writer'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'John Shipmen',
    designation: 'Lead Developer'
  }, {
    image: 'assets/images/team/4.jpg',
    name: 'Hileri Keol',
    designation: 'CEO & Founder at Company'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'John Shipmen',
    designation: 'Lead Developer'
 }]


}
