import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-newsreg',
    templateUrl: './newsreg.component.html',
    styleUrls: ['./newsreg.component.css']
})

export class NewsregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Newsreg(form: NgForm) {
      const payload = new HttpParams()
      .set('Heading', form.value.heading)
      .set('Subheading', form.value.subheading )
      .set('Text', form.value.content )
      .set('image', form.value.image);
      this.http.post('http://localhost:3000/api/user/newsregister', payload).subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
