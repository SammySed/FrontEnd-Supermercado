import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'tests-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent implements OnInit {

  constructor(private route:Router, private clienteService: ClientesService) { }

    //CRIAR OBJETO DO TIPO CLIENTE
    model: Cliente  = new Cliente();

  voltarParaLista(){

    this.route.navigate(['/clientes']);
  }

  submit(): void{
    this.clienteService.Adicionar(this.model).subscribe((data) => {
      if (data > 0){ 
      console.log("cliente cadastrado com sucesso!!")
      }
  });
  }

  ngOnInit(): void {
  }

}
