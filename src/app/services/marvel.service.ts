import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  buildUrl(search: string) {
    return `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=f25f36a0837ee6c5d517dd92ee41eec2&hash=a1b2fa20202d8b26e22ac645a1381544`;
  };
  constructor(private http: HttpClient) { }

  getCharacters(search: string): Observable<any> {
    const url = this.buildUrl(search);
    return this.http.get(`${url}`);
  }
}
