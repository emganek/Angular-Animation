import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCompanyAnimationComponent } from '../logo-company-animation/logo-company-animation.component';

@Component({
  selector: 'app-mascot-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascot-company.component.html',
  styleUrls: ['./mascot-company.component.scss'],
})
export class MascotCompanyComponent {
  @ViewChild('loadingScreen', { static: true, read: ViewContainerRef })
  loadingScreenContainerRef!: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log('viewContainerRef', this.loadingScreenContainerRef);
    
  }

  ngOnInit(){
    console.log('ngOnInit viewContainerRef', this.loadingScreenContainerRef);
    this.showLoadingScreen();
  }

  showLoadingScreen() {
    const componentRef = this.loadingScreenContainerRef.createComponent(
      LogoCompanyAnimationComponent
    );
  }
}
