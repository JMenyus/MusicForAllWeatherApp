import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SummerService {
constructor() { }
getList(){
    return[
      {
        "id": 1,
        "name": "Avicii vs Nicky Romero - I Could Be The One (Nicktim)",
        "description": "summer music",
        "url": "https://www.youtube.com/watch?v=bek1y2uiQGA"
    },
    {
        "id": 2,
        "name": "Irish Way - The O'Reillys and the Paddyhats [Official Video]",
        "description": "summer music",
        "url": "https://www.youtube.com/watch?v=c2bEwZR7g1Y"
    },
    {
        "id": 3,
        "name": "Lana Del Rey - Summertime Sadness",
        "description": "summer music",
        "url": "https://www.youtube.com/watch?v=nVjsGKrE6E8"
    }
    ];
  }
}
