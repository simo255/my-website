import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from "./components/resume/resume.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, HeaderComponent, RouterModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
