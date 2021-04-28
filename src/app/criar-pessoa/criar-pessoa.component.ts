import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css'],
  providers: [MessageService]
})
export class CriarPessoaComponent implements OnInit {


  pessoa: Pessoa = new Pessoa();

  constructor(private router:Router, private pessoaService: PessoaService,
  private messageService:MessageService) { }


  ngOnInit(): void {
    
  }

  voltarMenuPessoa(){
    this.router.navigate(['cadastro/listapessoas']);
  }

  salvarPessoa(){
    
    this.pessoaService.criarPessoa(this.pessoa).subscribe(async data => {
      this.messageService.add({severity:'success',
          summary:'Pessoa cadastrada com sucesso'});
         await this.delay(2000);
        this.voltarMenuPessoa();
    },
    error=>{
      this.messageService.add({severity:'error',
          summary:'Email ou Celular já cadastrado', detail:'Tente novamente!'});
    });
    
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

}

