import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgModule } from '@angular/core';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', component: ResumeComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blogs/:slug', component: BlogDetailComponent },
    { path: '**', redirectTo: '' } // Redirect any unknown paths to the resume component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }