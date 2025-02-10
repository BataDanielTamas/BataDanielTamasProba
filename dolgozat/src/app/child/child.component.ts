import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>{{ childText }}</p>
  `,
  styles: []
})
export class ChildComponent {
  @Input() childText: string = '';
}