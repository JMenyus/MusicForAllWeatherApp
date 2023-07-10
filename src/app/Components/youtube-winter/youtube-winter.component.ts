import { Component,OnInit } from '@angular/core';
import { WinterService } from 'src/app/Services/winter.service';


@Component({
  selector: 'app-youtube-winter',
  templateUrl: './youtube-winter.component.html',
  styleUrls: ['./youtube-winter.component.css']
})
export class YoutubeWinterComponent implements OnInit {
  
  public music:any = []

    constructor(private list: WinterService) { }
    ngOnInit(): void {
    this.music = this.list.getList();
    console.log(this.music);
  }
}