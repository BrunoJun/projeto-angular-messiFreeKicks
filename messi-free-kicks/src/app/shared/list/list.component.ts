import { Component, OnInit, Injectable } from '@angular/core';
import { FreeKicksServiceService } from 'src/app/services/free-kicks-service.service';
import { SelectorComponent } from '../selector/selector.component';
import { FreeKicks } from 'src/app/module/free-kicks-list';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public listGols: any

  constructor (private freeKicksService: FreeKicksServiceService){}

  ngOnInit(): void {

    this.freeKicksService.freeKickList.subscribe(
      {
        next: (res) => {
          
          this.listGols = res
          console.log('ngOnit = ' + this.listGols)
        },
        error: (err) => console.log(err),
      }
    )
  }

  public receiveValue(valor: string){

    console.log('lista = ' + this.listGols)
  }
}
