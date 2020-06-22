import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenttypesComponent } from './agenttypes/agenttypes.component';
import { AgenttypeComponent } from './agenttypes/agenttype/agenttype.component';
import { AgenttypeListComponent } from './agenttypes/agenttype-list/agenttype-list.component';
import { AgenttypeService } from './shared/agenttype.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AgenttypesComponent,
    AgenttypeComponent,
    AgenttypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AgenttypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
