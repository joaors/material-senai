import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CursoComponent,
    AlunoComponent,
    CursoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
