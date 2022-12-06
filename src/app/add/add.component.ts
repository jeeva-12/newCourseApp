import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  courseTittle=""
  courseDescription=""
  venue=""
  duration=""
  date=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"courseTittle":this.courseTittle,"courseDescription":this.courseDescription,"venue":this.venue,"duration":this.duration,"date":this.date}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)

        if (response.status=="success") {
          alert("Course Added Successfully")
          this.courseTittle=""
          this.date=""

          
        } else {
          alert("Something Went Wrong")
        }
      }
    )
    
    
  }


}
