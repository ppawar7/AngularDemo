import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { LifeCycleHooksExampleComponent } from './life-cycle-hooks-example/life-cycle-hooks-example.component';
import { SampleComponent } from './life-cycle-hooks-example/sample.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksExampleComponent,
    SampleComponent,
    DataBindingExampleComponent,
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
