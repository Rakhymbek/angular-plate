import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../codeblock/codeblock.component';

@Component({
  selector: 'app-codeblock-box',
  templateUrl: './codeblock-box.component.html',
  styleUrls: ['./codeblock-box.component.css']
})
export class CodeblockBoxComponent implements OnInit {
  @Input() character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
