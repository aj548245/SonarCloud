import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  debugger;
  a= undefined;
  b=null;
  title = 'TsLintImport';
  ngOnInit()
  {
    this.a===undefined ? 'test':'test1';
    let a = "DoubleQuoteTest";
    if(this.a==this.b)
    {

    }
    else
    {

    }
    let c=[1,2,3,4,5,6,7]
    c.filter(a=>a=a)
debugger;
  }
}
