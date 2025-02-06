import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  imports: [CommonModule, FormsModule],
  templateUrl: './enroll.component.html',
  styleUrls:[ './enroll.component.css']
})
export class EnrollComponent implements OnInit {
  @ViewChild('enrollForm') form!: NgForm; // ✅ Ensured correct ViewChild usage
  enroll: any[] = [];
  editconductId: string = '';
  editMode: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  // ✅ Create a new enroll (send data to database)
  createenroll(con: { Name: string; Email: string;course:string;  }) {
    this.http.post('https://angular-app-74d95-default-rtdb.firebaseio.com/enroll.json', con)
      .subscribe((res: any) => {
        console.log(res);
        alert('Registered Successfully!!');
        if (this.form) {
          this.form.resetForm(); // ✅ Reset form after submission
        }
      });
  }

  // ✅ Handle form submission (only sends data)
  onSubmit() {
    if (!this.form || !this.form.value) {
      console.error("Form reference is not available");
      return;
    }
    this.createenroll(this.form.value);
  }
}
