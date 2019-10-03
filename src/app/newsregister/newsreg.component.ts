import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-nesreg',
    templateUrl: './newsreg.component.html',
    styleUrls: ['./newsreg.component.css']
})

export class NewsregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Newsreg(form: NgForm) {
        this.http.get('http://localhost:3000/newsregister').subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
