import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{

@Input()
photoCover:string =""

@Input()
cardTitle:string =""

@Input()
cardDescription:string =""

@Input()
Id:string | null =""

private id:string | null ="0"

constructor(
  private route:ActivatedRoute
){}
ngOnInit():void{
  this.route.paramMap.subscribe(
   value => 
    this.id = value.get("id")      
  )
  this.setValeusToComponent(this.id)
}

setValeusToComponent(id:string | null){
  const result = dataFake.filter(article => article.id.toString() == id)[0]
  this.photoCover = result.photo
  this.cardTitle = result.title
  this.cardDescription = result.description
}
}
