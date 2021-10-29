import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-serviciocliente',
  templateUrl: './serviciocliente.component.html',
  styleUrls: ['./serviciocliente.component.scss']
})
export class ServicioclienteComponent implements OnInit {
 
  estado:boolean=false;
  formulario:FormGroup;

  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      nombrecompleto:['', Validators.required],
      telefono:['', Validators.required],
      email:['', Validators.required],
      mensaje:['', [Validators.required, Validators.maxLength(1000)]]
    });
  }
  ngOnInit(): void {
  }
  
  ValidarDatos(){
      this.estado=true;
      let datos:any=[{
        "nombrecompleto": this.formulario.get("nombrecompleto")?.value,
        "telefono": this.formulario.get("telefono")?.value,
        "email": this.formulario.get("email")?.value,
        "mensaje": this.formulario.get("mensaje")?.value,
        "rpublicidad": this.formulario.get("rpublicidad")?.value
      }];
      console.log(datos);
  }
}