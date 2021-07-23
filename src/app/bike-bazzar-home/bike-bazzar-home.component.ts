import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bike-bazzar-home',
  templateUrl: './bike-bazzar-home.component.html',
  styleUrls: ['./bike-bazzar-home.component.css']
})
export class BikeBazzarHomeComponent implements OnInit {
  number: any

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    this.http.get(url).subscribe((data) => {
      this.number = data
    });
  }

  existOrder() {
    this.router.navigate(['existing-order']);
  }
  createOrder() {
    this.router.navigate(['create-new-order']);
  }

}
