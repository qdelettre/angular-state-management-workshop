import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../state/user.model';

const API_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UserIntegrationService {
  constructor(private httpClient: HttpClient) {}

  load(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }

  create(userToCreate: Partial<User>): Observable<void> {
    return this.httpClient.post<void>(API_URL, userToCreate);
  }

  update(userToUpdate: Partial<User>): Observable<void> {
    return this.httpClient.put<void>(
      `${API_URL}/${userToUpdate.id}`,
      userToUpdate
    );
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${API_URL}/${id}`);
  }
}
