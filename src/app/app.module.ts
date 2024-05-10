import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { RouterModule } from '@angular/router';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    PasswordPatternDirective,
    ValidateUserNameDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
