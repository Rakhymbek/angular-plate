import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { MovieBlockComponent } from './movie-block/movie-block.component';
import { CodeblockBoxComponent } from './codeblock-box/codeblock-box.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CodeblockComponent,
    MovieBlockComponent,
    CodeblockBoxComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
