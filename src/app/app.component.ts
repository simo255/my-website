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
