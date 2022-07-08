import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor(private api:ApiServiceService) { 
    api.viewTodo().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=
  [
   
  ]

}
