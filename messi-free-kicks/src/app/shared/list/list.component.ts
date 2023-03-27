import { Component, OnInit } from '@angular/core';
import { FreeKicks } from 'src/app/module/free-kicks-list';
import { FreeKicksServiceService } from 'src/app/services/free-kicks-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public listGols: Array<FreeKicks> = []

  constructor (private freeKicksServiceService: FreeKicksServiceService){}

  ngOnInit(): void {

    this.freeKicksServiceService.freeKickList().subscribe(
      {
        next: (res) => this.listGols = res,
        error: (err) => console.log(err),
      }
    )
  }
}
