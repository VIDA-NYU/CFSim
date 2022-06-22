import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material';
import { DatasetOverviewComponent } from './components/dataset-overview/dataset-overview.component';
import { ParameterSelectorComponent } from './components/parameter-selector/parameter-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ToolbarComponent,
    DatasetOverviewComponent,
    ParameterSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
