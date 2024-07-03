import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetserviceService } from '../getservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  restaurant = [
    {
      name: "Chinese Delight",
      email: "chines@m.coom",
      place: "Mumbai",
      info: "Authentic Chinese cuisine and more",
      image: "assets/1.webp",
    },
    {
      name: "Dragon Palace",
      email: "chines@m.coom",
      place: "Delhi",
      info: "Delicious Chinese dishes in a vibrant",
      image: "assets/2.jpg",
    },
    {
      name: "Golden Wok",
      email: "chines@m.coom",
      place: "Bangalore",
      info: "Savor the flavors of traditional Chinese",
      image: "assets/3.jpg",
    },
    {
      name: "Oriental Garden",
      email: "chines@m.coom",
      place: "Chennai",
      info: "Experience a fusion of Chinese and local",
      image: "assets/4.webp",
    },
    {
      name: "Panda Express",
      email: "chines@m.coom",
      place: "Hyderabad",
      info: "Fast and flavorful Chinese food for all",
      image: "assets/5.jpg",
    },
    {
      name: "Great Wall Restaurant",
      email: "chines@m.coom",
      place: "Kolkata",
      info: "Discover the essence of Chinese culinary",
      image: "assets/6.jpg",
    },
    {
      name: "Dynasty Cuisine",
      email: "chines@m.coom",
      place: "Jaipur",
      info: "A royal feast of Chinese flavors",
      image: "assets/7.jpg",
    },
    {
      name: "Chopsticks Paradise",
      email: "chines@m.coom",
      place: "Ahmedabad",
      info: "Delightful Chinese cuisine in the heart",
      image: "assets/1.webp",
    },
    {
      name: "Mandarin Garden",
      email: "chines@m.coom",
      place: "Pune",
      info: "Immerse yourself in the rich flavors ",
      image: "assets/3.jpg",
    },
    {
      name: "Fortune Cookie House",
      email: "chines@m.coom",
      place: "Lucknow",
      info: "Unravel the mysteries of Chinese",
      image: "assets/5.jpg",
    },
    {
      name: "Lucky Dragon",
      email: "chines@m.coom",
      place: "Surat",
      info: "Experience luck and flavor in every bite",
      image: "assets/6.jpg",
    },
    {
      name: "Red Lantern",
      email: "chines@m.coom",
      place: "Nagpur",
      info: "Let the lantern guide you to authentic",
      image: "assets/7.jpg",
    }
  ];

  isNewRestaurant: boolean = true;
  show: boolean = false;
  restaurantForm: FormGroup;
  currentIndex: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public get: GetserviceService,
    private renderer: Renderer2
  ) {
    this.restaurantForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      place: ['', Validators.required],
      info: ['', Validators.required],
      // image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      const formData = {
        name: this.restaurantForm.value.name,
        email: this.restaurantForm.value.email,
        place: this.restaurantForm.value.place,
        info: this.restaurantForm.value.info,
        image: "assets/7.jpg"
      }
      if (this.isNewRestaurant) {
        this.restaurant.push(formData);
        this.restaurantForm.reset();
      } else {
        this.restaurant[this.currentIndex].name = this.restaurantForm.value.name;
        this.restaurant[this.currentIndex].email = this.restaurantForm.value.email;
        this.restaurant[this.currentIndex].place = this.restaurantForm.value.place;
        this.restaurant[this.currentIndex].info = this.restaurantForm.value.info;
        this.restaurant[this.currentIndex].image = "assets/7.jpg";
        this.isNewRestaurant = true;
        this.restaurantForm.reset();
      }

    }
  }

  toggleForm() {
    this.show = !this.show;
  }


  onClickRestaurant(res: any, index: any) {
    console.log(res)
    const mockRestaurantData = {
      name: res.name,
      email: res.email,
      place: res.place,
      info: res.info
    };
    this.currentIndex = index;
    this.isNewRestaurant = false;
    this.show = true;
    this.restaurantForm.patchValue(mockRestaurantData);
    const targetElement = this.scrollTarget.nativeElement;
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // window.scrollBy(0, -10);
  }

  delete(i: number) {
    this.restaurant.splice(i, 1);
    this.isNewRestaurant = true;
    this.restaurantForm.reset();
  }


  // restaurantview(res: any) {
  //   this.get.setData(res);
  //   this.router.navigate(['/restaurant-view']);
  // }




}
