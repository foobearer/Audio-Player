import { Component, OnChanges, OnInit } from '@angular/core';
import { MusicListService } from './music-list.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit{
  music;
  constructor(private musicListService: MusicListService) { }

  ngOnInit(): void {}

  searchSong(value) {
    this.musicListService.getMusicList(value).subscribe(music => {
      this.music = music;
    })
  }

}
