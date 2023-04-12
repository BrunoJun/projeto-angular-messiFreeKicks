import { Component, OnInit, Injectable } from '@angular/core';
import { FreeKicks } from 'src/app/module/free-kicks-list';
import { FreeKicksService} from 'src/app/services/free-kicks-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public listGols: Array<FreeKicks> = []
  private setListGols: Array<FreeKicks> = []

  constructor (private freeKicksService: FreeKicksService){}

  ngOnInit(): void {

    this.freeKicksService.freeKickList.subscribe(
      {
        next: (res) => {
          
          this.setListGols = res        
          this.listGols = this.setListGols
        },
        error: (err) => console.log(err),
      }
    )
  }

  public receiveValue(value: string){

    const filter = this.setListGols.filter(e => {

      return e.times.includes(value)
    })

    if (value === 'Todos'){

      this.listGols = this.setListGols
    } else {
      
      this.listGols = filter
    }
  }
}
