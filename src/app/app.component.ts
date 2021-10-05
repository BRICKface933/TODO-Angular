import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  items: String[] = ["first" , "second", "third"];
  text:string = "";

  addList(){
    if(this.text !== ""){
      this.items.push(this.text);
      this.text = "";
    }
  }
  delList(){
    this.items.length = 0;
  }
}

// export class Worklist{
//   work_str!: string;

//   constructor(work_str: string){
//     this.work_str = work_str;
//   }
// }

