import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-cakereg',
    templateUrl: './cakecategory.component.html',
    styleUrls: ['./cakecategory.component.css']
})

export class CakescategoryregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    selectedFile: File = null;
    ngOnInit() {}

    selectedImage(event) {
      // console.log(event);
      if (event.target.files.length > 0) {
         this.selectedFile = event.target.files[0] as File;

        }
    }

    Cakesreg(form: NgForm) {
        const cakecatdata = new FormData();
        cakecatdata.append('Category', form.value.category);
        cakecatdata.append('Name', form.value.name );
        cakecatdata.append('Price', form.value.price );
        cakecatdata.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/api/user//cakesregister', cakecatdata).subscribe(() => {
            // console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
