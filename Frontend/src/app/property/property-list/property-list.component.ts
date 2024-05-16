
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
    Properties: Array<IProperty> = [];
    SellRent = 1;

    constructor(private route:ActivatedRoute, private housingservice : HousingService){} //dependency injection

    ngOnInit(): void {

        if(this.route.snapshot.url.toString()){
            this.SellRent = 2 // means we are on rent-property
        }
        this.housingservice.getAllProperties(this.SellRent).subscribe(
            data => {this.Properties = data}, error => console.log(error)
        )
    }
}
