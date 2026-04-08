import { Component, inject } from '@angular/core';
import { HousingLocation, HousingLocations } from '../../models/housing-location';
import { HousingLocationComponent } from '../../components/housing-location/housing-location';
import { HousingService } from '../../services/housing-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [HousingLocationComponent, FormsModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  searchTerm = '';


  housingLocationList!: HousingLocations;

  // injection directe
  housingService = inject(HousingService);

  // injection du housing service via constructeur
  // pattern ts : <portee> <nom> : <type>
  // constructor(private housingService: Housing) {
  //   this.housingLocationList = housingService.houses;
  // }

  // constructor() {
  //   const housingService = inject(Housing);
  //   this.housingLocationList = housingService.houses;
  // }

  // with ngOnInit lifecycle hook
  ngOnInit() {
    // we can do this but...
    // const housingService = inject(Housing); // cannot use anywhere
    // this.housingLocationList = this.housingService.getAllHousingLocations();

    // ... prefer to call a method to handle logic (for instance if we want to handle errors...)
    this.initData();
  }

  initData() {
    // const housingService = inject(Housing); // cannot use anywhere
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  search() {
    // sort of debounce
    if(this.searchTerm.length > 3) {
      console.log(this.searchTerm);
      this.housingLocationList = this.housingLocationList.filter(house => house.city.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.initData();
    }
  }
}
