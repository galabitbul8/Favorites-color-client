import { Component } from '@angular/core';
import { FavoriteColorService } from './services/favorite-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'favoriteColor';
  boxesColor:any;


  constructor(private fcService:FavoriteColorService){
  }

  ngOnInit(): void {
    this.getFc();

  }

  // get list of favorite color
  getFc(){
    this.fcService.getFcList().subscribe(
      {
        next:data => {
          this.boxesColor = data 
        },
        error:err => console.error(err),
        complete: () => {console.log("favoite colors loaded")}
      }
    )
  }
  
  // claculate the width of the colored box via formula given
  calculateWidth(vote:number):number{
    let width = 200*(vote/this.max(this.boxesColor));
    return width;
  }

  //the function will return the max vote number from all the boxes
  private max(boxesColor:any[]):number{
    let max = 1;
    boxesColor.forEach(element => {
      if(element.vote > max)
        max = element.vote;
    });
    return max;
  }

  increseVote(id:number):void{
    this.boxesColor[id].vote++;
    this.fcService.updateFcById(this.boxesColor[id]).subscribe({
      error:err => console.error(err),
      complete: () => {
        console.log("update seccess")
      }
    });
  }
}
