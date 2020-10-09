export interface MusicList {
  resultCount: number;
  results: Song[];
}

export interface Song {
  artistName: string;
  trackName: string;
  collectionName: string;
  country: string;
  trackNumber: number;
  primaryGenreName: string;
}
