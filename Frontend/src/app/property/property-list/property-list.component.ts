
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
    Properties: Array<IProperty> = [];

    constructor( private housingservice : HousingService){} //dependency injection

    ngOnInit(): void {
        this.housingservice.getAllProperties().subscribe(
            data => {this.Properties = data}, error => console.log(error)
        )
    }
}
