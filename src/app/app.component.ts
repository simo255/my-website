import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule], 
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 constructor(private resumeService: ResumeService) {
 }
 resumeData: any; 

 ngOnInit(): void {


console.log(`
  **************************************************************
  *                                                            *
  *   You've landed on my online portfolio! It's a simple      *
  *   website built to showcase my projects and passion        *
  *   for development. I believe less is more when it comes    *
  *   comes to design, but I’ve made sure it’s functional.     *
  *                                                            *
  *   Simple but efficient, just like the code.                *
  *                                                            *
  *   Take your time exploring, and don't hesitate to reach    *
  *   out with any feedback!                                   *
  *                                                            *
  **************************************************************
  `);
  


  this.resumeService.getResume().subscribe(
    (data) => {
      this.resumeData = data; 
    },
    (error) => {
      console.error('Error fetching resume data', error); 
    }
  );
}
}
