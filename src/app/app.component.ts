import { Component, OnInit } from '@angular/core';
import * as asciidoctor from 'asciidoctor';

@Component({
  selector: 'pr0-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  get asciidoc() {
    return this._asciidoc;
  }
  set asciidoc(value: string) {
    this._asciidoc = value;
    this.html = asciidoctor().convert(value);
    console.log(this.html);
  }
  private _asciidoc: string;
  public html: string;

  ngOnInit(): void {
    // console.log(.convert);
  }

}
