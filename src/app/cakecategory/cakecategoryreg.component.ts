import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-cakereg',
    templateUrl: './cakecategory.component.html',
    styleUrls: ['./cakecategory.component.css']
})

export class CakescategoryregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Newsreg(form: NgForm) {
        this.http.get('http://localhost:3000/api/user/cakesregister').subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
