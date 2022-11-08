import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  inputIf: string = "";
  persona: Persona = {
    nombre: '',
    apellido: '',
    edad: 0,
    correo: ''
  }
  personas: Persona[] = [
    {
      nombre: 'Wilson David',
      apellido: 'Hurtado Morales',
      edad: 25,
      correo: 'wilson.hurtado@segurosbolivar.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addRegister(){
    this.personas.push(this.persona)
  }

}
