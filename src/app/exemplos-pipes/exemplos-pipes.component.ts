import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  filtro: string;

  livro: any = {
    titulo: "Learning Javascript",
    rating: 4.5321,
    paginas: 315,
    preco: 49.58,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://localhost:4200/"
  }

  livros: string[] = ['Angular 2', 'Java', 'Erlang'];

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.filtro = value;
  }

}
