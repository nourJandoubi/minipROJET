import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.css']
})
export class DetailHotelComponent implements OnInit {
  identifiant: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  retour() {
    this.router.navigate(['/acceuil']);
  }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }

}
