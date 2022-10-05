import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef<HTMLDivElement>;
  public isCollapse: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.sidebar.nativeElement.classList.toggle('collapse');
    this.isCollapse = !this.isCollapse;
    console.log(this.isCollapse);
  }
}
