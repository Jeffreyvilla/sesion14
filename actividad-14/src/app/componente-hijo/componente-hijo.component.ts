import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  @Input() formulario: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    console.log(this.formulario, 'FORM')
  }

}
