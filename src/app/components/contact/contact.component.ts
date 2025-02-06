import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // ✅ Fixed 'styleUrl' to 'styleUrls'
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') form!: NgForm; // ✅ Ensured correct ViewChild usage
  contact: any[] = [];
  editconductId: string = '';
  editMode: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  // ✅ Create a new contact (send data to database)
  createcontact(con: { Name: string; Email: string; Message: string }) {
    this.http.post('https://angular-app-74d95-default-rtdb.firebaseio.com/contact.json', con)
      .subscribe((res: any) => {
        console.log(res);
        alert('Message Sent Successfully!!');
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
    this.createcontact(this.form.value);
  }
}
