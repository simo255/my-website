import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  getResume(): Observable<any> {
    const url = "https://raw.githubusercontent.com/simo255/my_website/gh-pages/resume.json";

    return this.http.get(url);
  }
}
