import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  @Input()
  items!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
