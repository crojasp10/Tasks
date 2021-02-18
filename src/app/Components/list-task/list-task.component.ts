import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  list: any[] = []
  constructor() { }

  ngOnInit(): void {

    this.list = [

      { id: 1, title: "Tarea1", description: "Ir al supermercado" },
      { id: 2, title: "Tarea2", description: "Sacar el perro" },
      { id: 3, title: "Tarea3", description: "pagar servicios" }
    ]
  }

  deletetask(id: number):void{

      console.log(id)

  }



}
