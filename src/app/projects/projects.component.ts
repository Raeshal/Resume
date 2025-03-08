import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  visible : boolean = false

 click()
 {
 
    // Replace 'resume.pdf' with the path to your resume file
    window.location.href = 'resume.pdf';

  

}
}
