import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-offersreg',
    templateUrl: './offersreg.component.html',
    styleUrls: ['./offersreg.component.css']
})

export class OffersregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    selectedFile: File = null;
    ngOnInit() {}

    selectedImage(event) {
      // console.log(event);
      if (event.target.files.length > 0) {
         this.selectedFile = event.target.files[0] as File;

        }
    }

    Offersreg(form: NgForm) {
      // const payload = new HttpParams()
      // .set('Heading', form.value.heading)
      // .set('Subheading', form.value.subheading )
      // .set('Text', form.value.content )
      // .set('image', form.value.image);

      const offerdata = new FormData();
      offerdata.append('Heading', form.value.heading);
      offerdata.append('Subheading', form.value.subheading );
      offerdata.append('Text', form.value.content );
      offerdata.append('image', this.selectedFile, this.selectedFile.name);

      // console.log(offerdata);
      this.http.post('http://localhost:3000/api/user/offersregister', offerdata).subscribe(() => {
            // console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

  }

