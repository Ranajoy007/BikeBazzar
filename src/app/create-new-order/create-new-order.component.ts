import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-new-order',
  templateUrl: './create-new-order.component.html',
  styleUrls: ['./create-new-order.component.css']
})
export class CreateNewOrderComponent implements OnInit {
  cardata: any;
  allModels: any;
  selectedBrand: any;
  selectedModel: any;
  newData: any;
  fName: any;
  lName: any;
  ifVisible: boolean = false;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const url = "./../../assets/cardetails.json";
    this.http.get(url).subscribe((data) => {
      this.cardata = data;
    });

  }

  getModel() {
    if (this.selectedBrand && this.cardata) {
      this.cardata.forEach((eachCar: { name: string; model: []; }) => {
        if (eachCar.name == this.selectedBrand) {
          this.allModels = eachCar.model;
        }
      });
      // this.newData = this.cardata.find((eachCar: { name: any; }) => eachCar.name == this.selectedBrand);
    }
  }

  getFname(event: any) {
    if (event) {
      this.fName = event;
    }
  }

  getLname(event: any) {
    if (event) {
      this.lName = event;
    }
  }

  pqr() {
    if (this.fName && this.lName) {
      this.ifVisible = true;
    }
  }
}
