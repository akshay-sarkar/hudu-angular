import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formData = {email: '', password: ''};
  submitted = false;
  constructor(private router: Router) {}
  ngOnInit() {}

  onSubmit() {
    console.log('Here');
    this.submitted = true;
    /*this.router.navigate(['/movie']);*/
  }

}
