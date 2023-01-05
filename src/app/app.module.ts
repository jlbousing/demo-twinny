import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GraphZoneComponent } from './components/graph-zone/graph-zone.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { TwinnyButtonGradientComponent } from './components/twinny-button-gradient/twinny-button-gradient.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    LayoutComponent,
    GraphZoneComponent,
    LineChartComponent,
    LoginComponent,
    FooterComponent,
    InputPasswordComponent,
    TwinnyButtonGradientComponent,
    SignupComponent,
    InputWrapperComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
