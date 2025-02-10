import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  template: `
    <input [(ngModel)]="parentText" placeholder="Enter text">
    <app-child [childText]="parentText"></app-child>
  `,
  styles: []
})
export class ParentComponent {
  parentText = '';
}