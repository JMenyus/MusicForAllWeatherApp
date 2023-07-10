import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinterService {
  constructor() { }
  getList(){
      return[
        {
          "id": 1,
          "name": "Manchester Orchestra - The Silence (Official Music Video)",
          "description": "winter music",
          "url": "https://www.youtube.com/watch?v=8ui9umU0C2g"
      },
      {
          "id": 2,
          "name": "Green Day - Boulevard Of Broken Dreams [Official Music Video]",
          "description": "winter music",
          "url": "https://www.youtube.com/watch?v=Soa3gO7tL-c"
      },
      {
          "id": 3,
          "name": "OneRepublic - Counting Stars",
          "description": "winter music",
          "url": "https://www.youtube.com/watch?v=hT_nvWreIhg"
      }
      
      ];
    }
}
