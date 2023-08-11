import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { LogoCompanyComponent } from './components/logo-company/logo-company.component';
import { MascotCompanyComponent } from './components/mascot-company/mascot-company.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InputNumberModule,
    FormsModule,
    OpenCloseComponent,
    LogoCompanyComponent,
    MascotCompanyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myInput: any = { name: 'hiep' };
  count = 0;
  ngOnInit() {
    const paths = document.getElementsByClassName('logo-path') as any;
    console.log('path length', paths);
    for (let i = 0; i < paths.length; i++) {
      console.log(`Lettter ${i} and path length`, paths[i].getTotalLength());
    }
  }

  ngAfterViewInit() {
    const paths = document.querySelectorAll('.logo-path');
    console.log('path length ngAfterViewInit', paths);
  }

  onChangeValue() {
    console.log('change nèeeeeeeeeeeeeeeeeeeeeeeeee')
    // this.myInput = {...this.myInput};
    this.count ++;
  }

  value1: number = 42723;

  value2: number = 58151;

  value3: number = 2351.35;

  value4: number = 50;
}
