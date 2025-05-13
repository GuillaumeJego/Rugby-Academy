import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VolunteerModel } from '../models/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = '/api/volunteers.php';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Définir le header

  constructor(private http: HttpClient) {}

  getVolunteers(): Observable<VolunteerModel[]> {
    return this.http.get<VolunteerModel[]>(`${this.apiUrl}`);
  }

  signUp(volunteer: { name: string; stand: string; time_slot: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, volunteer);
  }

}