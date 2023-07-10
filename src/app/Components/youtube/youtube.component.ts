import { Component, OnInit } from '@angular/core';
import { SummerService } from 'src/app/Services/summer.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})

export class YoutubeComponent implements OnInit {
  
  public music:any = []

    constructor(private list: SummerService) { }
    ngOnInit(): void {
    this.music = this.list.getList();
    console.log(this.music);
  }
}
