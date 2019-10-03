import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-offersreg',
    templateUrl: './offersreg.component.html',
    styleUrls: ['./offersreg.component.css']
})

export class OffersregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Offersreg(form: NgForm) {
        this.http.get('http://localhost:3000/api/user/offersregister').subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
