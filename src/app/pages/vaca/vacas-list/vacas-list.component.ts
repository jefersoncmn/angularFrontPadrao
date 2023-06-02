import { Component } from '@angular/core';
import { VacaService } from '../shared/vaca.service';

@Component({
  selector: 'app-vacas-list',
  templateUrl: './vacas-list.component.html',
  styleUrls: ['./vacas-list.component.scss']
})
export class VacasListComponent {

  constructor(private vacaservice:VacaService){}

  ngOnInit(){
    console.log("Start");
    this.vacaservice.getAll().subscribe({
      complete: () => { console.log("deu bom") }, // completeHandler
      error: () => { console.log("deu ruim") },    // errorHandler 
      next: (data:any) => { console.log(data) },     // nextHandler
    });
  }

}
