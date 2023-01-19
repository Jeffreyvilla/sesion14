import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponenteHijoComponent } from './componente-hijo.component';

@NgModule({
    declarations: [
        ComponenteHijoComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    exports: [
        ComponenteHijoComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [ComponenteHijoComponent]
})
export class ComponenteHijoComponentModule { }
