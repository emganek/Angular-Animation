import { Routes } from '@angular/router';
import { LogoCompanyComponent } from './components/logo-company/logo-company.component';
import { LogoCompanyAnimationComponent } from './components/logo-company-animation/logo-company-animation.component';
import { MascotCompanyComponent } from './components/mascot-company/mascot-company.component';

export const routes: Routes = [
    {
        path: 'company-logo',
        component: LogoCompanyComponent
    },
    {
        path: 'company-logo-animation',
        component: LogoCompanyAnimationComponent
    },
    {
        path: 'company-mascot',
        component: MascotCompanyComponent
    },
];
