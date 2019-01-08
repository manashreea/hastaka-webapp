import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { HomeComponent } from '../../app-hastaka/home/home.component';
import { AboutusComponent } from '../../app-hastaka/aboutus/aboutus.component';
import { ProductsComponent } from '../../app-hastaka/products/products.component';
import { ShoponComponent } from '../../app-hastaka/shopon/shopon.component';
import { ContactusComponent } from '../../app-hastaka/contactus/contactus.component';
import {ImageZoomModule} from 'angular2-image-zoom';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ImageZoomModule,
  ],
  declarations: [
    //DashboardComponent,
    //UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ShoponComponent,
    ContactusComponent,
  ]
})

export class AdminLayoutModule {}
