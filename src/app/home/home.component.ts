import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  
  constructor() { }

  ngOnInit(): void {
   // this.getUsers(); remove @ the end of module5
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  //  getUsers() {
    /*this.http.get('http://localhost:5000/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })*/
   // this.http.get('http://localhost:5000/api/users').subscribe(users => this.users = users);
  //}  remove @ the end of module5

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
