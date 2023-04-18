import { Component, ElementRef, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreeKicksService } from 'src/app/services/free-kicks-service.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit{

  public id: string = this.activatedRoute.snapshot.params['id']
  public gol: {id: number, data: string, times: string, placar: string, url: string} = {
    id: 0,
    data: '',
    times: '',
    placar: '',
    url: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private freeKicksService: FreeKicksService,
              private hostElement: ElementRef){}

  ngOnInit(): void {

    let iframe = this.hostElement.nativeElement.querySelector('iframe')

    this.freeKicksService.freeKickList.subscribe(
      {
        next: (res) => {
      
          this.gol = res[+this.id-1]
          iframe.src = "https://www.youtube.com/embed/" + res[+this.id-1].url
        },
        error: (err) => console.log(err),
      }
    )
  }
}
