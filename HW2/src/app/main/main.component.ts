import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router} from '@angular/router';

export class Item{ 
  city!: string;
  country!: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  item: Item = new Item();
  i: string[] = [this.item.city, this.item.country];
  places: Array<{city:string,country:string}> = []
  constructor(private router: Router){ }
  goToItem(myItem: Item){
    var placeObject = { 'city': myItem.city, 'country': myItem.country };
    localStorage.setItem('place', JSON.stringify(placeObject));
    //this.i = [this.item.city, this.item.country]
    this.places.push
    ({
    "city": myItem.city,
    "country": myItem.country
    })
    console.log('add')
  }
}