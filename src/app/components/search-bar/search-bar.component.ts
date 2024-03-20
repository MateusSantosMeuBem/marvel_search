import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MarvelService } from '../../services/marvel.service';
import { CommonModule } from '@angular/common';
export interface character {
  name: string;
  imageUri: string;
}

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  data: character[] = [];

  constructor(private apiService: MarvelService) { }

  // Method to fetch data using the API service
  fetchData(): void {
    const search = (document.getElementById('search') as HTMLInputElement).value;
    // const search = 'spider';
    this.apiService.getCharacters(search).subscribe(
      (response) => {
        const data = response.data.results;
        this.data = [];
        data.forEach((element: any) => {
          console.log(element.name)
          this.data.push({
            name: element.name,
            imageUri: element.thumbnail.path + '.' + element.thumbnail.extension,
          });
        });
        // console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    // characters.forEach((element: any) => {
    //   this.data.push({
    //     name: element.name,
    //     imageUri: element.imageUri,
    //   });
    // });

  }
}
