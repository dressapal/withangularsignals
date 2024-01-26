import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit{

  public users:User[] = []
  public currentPage:number = 1;

  constructor(private userService:UsersService){

  }

  ngOnInit(){
    this.loadPage(this.currentPage);
  }

  loadPage(page:number){
    this.userService.loadPage(page).subscribe(
      users => {
        console.log(users);
        this.users = users
      }
    )
  }

}
