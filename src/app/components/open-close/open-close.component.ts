import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 1,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('3s')]),
      // transition('closed => open', [animate('0.5s')]),
      transition('closed => open', [animate('1s')]),
      transition('* => *', [
        style({
          border: '10px solid black',
        }),
        animate('1s'),
      ]),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({
          opacity: '*',
          transform: 'translateX(-100%)',
        }),
        animate('2s', style({ opacity: 1, transform: 'translateX(80%)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
      transition(
        '* <=> *',
        style({
          opacity: 0,
        })
      ),
    ]),
  ],
})
export class OpenCloseComponent {
  isOpen = true;
  isShown = true;
  toggle() {
    this.isOpen = !this.isOpen;
    this.isShown = !this.isShown;
  }
}
