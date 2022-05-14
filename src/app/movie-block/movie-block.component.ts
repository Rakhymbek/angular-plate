import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.css']
})
export class MovieBlockComponent implements OnInit {
  title = 'dsadasdsa'
  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
    
  }

}
