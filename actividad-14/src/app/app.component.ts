import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-14';
  @Input() formulario: FormGroup = new FormGroup({});
  submitted = false;
  resultado = '';
  constructor(private formBuilder: FormBuilder) {
    this.inicializarFormulario()
  }


  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      dni: new FormControl('', Validators.required),
      estado: new FormControl('2', Validators.required),
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
