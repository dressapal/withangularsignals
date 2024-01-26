import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';
import { currentPage, labelTotalUser, users } from '../../store/users.store';

@Component({
  selector: 'app-users-signals-page',
  standalone: true,
  imports: [],
  templateUrl: './users-signals-page.component.html',
  styleUrl: './users-signals-page.component.css'
})
export class UsersSignalsPageComponent implements OnInit{


  public usersService = inject(UsersService);

  get users(){
    return users();
  }

  get currentPage(){
    return currentPage()
  }

  get labelTotalUser(){
    return labelTotalUser();
  }


  ngOnInit(): void {
    this.loadPage(currentPage())
    throw new Error('Method not implemented.');
  }


  loadPage(page:number){
    this.usersService.loadPage(page).pipe(
      filter(users => users.length>1)
    ).subscribe( newUsers => {
       currentPage.set(page);
      //this.users.set([...this.users(), ...users]);

      users.update(currentUsers => [...currentUsers, ...newUsers ])
    }
    )
   
  }

}
