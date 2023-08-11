import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-logo-company-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-company-animation.component.html',
  styleUrls: ['./logo-company-animation.component.scss'],
  animations: [
    trigger('drawingLogo', [
      transition(':enter', [
        style({ opacity: 0.8 }),
        query('.logo-path', [
          stagger(500, [
            animate('1.2s', style({ 'stroke-dashoffset': '0px' })),
          ]),
        ]),
        group([
          query('.logo-path-white', [
            style({
              fill: 'transparent',
            }),
            animate('1.2s', style({ fill: 'white' })),
          ]),
          query('.logo-path-green', [
            style({
              fill: 'transparent',
            }),
            animate('1.2s', style({ fill: '#cddb28' })),
          ]),
          query('.logo-name', [animate('1.2s', style({ opacity: 1 }))]),
        ]),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LogoCompanyAnimationComponent {
  @Output() animationEnd = new EventEmitter<boolean>();
  onEndEvent(event: any) {
    console.log('end animation', event);
    this.animationEnd.emit(true);
  }
}
