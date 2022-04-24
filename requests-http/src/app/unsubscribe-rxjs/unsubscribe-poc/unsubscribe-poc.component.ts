import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
    selector: 'app-unsubscribe-poc',
    templateUrl: './unsubscribe-poc.component.html',
    styleUrls: ['./unsubscribe-poc.component.scss']
})
export class UnsubscribePocComponent implements OnInit {

    mostrarComponentes: boolean = true;

    constructor(private service: EnviarValorService) { }

    ngOnInit(): void {
    }

    emitirValor(valor: string) {

    }

    destruirComponentes() {
        this.mostrarComponentes = !this.mostrarComponentes;
    }

}
