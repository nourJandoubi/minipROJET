import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels: Hotel[] = [
    new Hotel(1, 'El mouradi Africa', '../assets/hotels/el mouradi africa/Hotel-60-20160303-041857.jpg', 'tunis', 120,3),
    new Hotel(2, 'Hasdrabal Thalasso Djerba', '../assets/hotels/hasdrabal thalasso Djerba/Hasdrubal_Prestige_Thalassa_et_Spa_5.jpg', 'Djerba', 210,3),
    new Hotel(3, ' bel azur thalasson&bangaloas', '../assets/hotels/hotel bel azur thalasson&bangaloas hammamet/bel-azur-hammamet_VIRHBS324025202204_pgbighd.jpg', 'hamamet', 200,4),
    new Hotel(4, 'iberostar selection royal el mansour ', '../assets/hotels/iberostar selection royal el mansour mahdia/Iberostar_Royal_El_Mansour_et_Thalasso_2.jpg', 'mahdia', 100,5),
    new Hotel(5, 'mahdia palace thalasso', '../assets/hotels/mahdia palace thalasso/1539580.jpg', 'mahdia', 220,5),
    new Hotel(6, 'medina belisaire and thalasso ', '../assets/hotels/medina belisaire and thalasso hammamet/566-38.jpg', 'mahdia', 100,2)
  ];
  getHotel() {
    return this.hotels;
  }

  constructor() { }
}

