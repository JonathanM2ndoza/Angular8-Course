import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe1: any = {};
  @Input() id: number;

  // @Output() heroSelect: EventEmitter<number>;
  constructor(private router: Router) { 
    // this.heroSelect = new EventEmitter();
  }

  ngOnInit() {
  }

  showHeroe(){
     console.log("HeroCardComponent " + this.id);
     this.router.navigate(['/heroe', this.id]);
    // this.heroSelect.emit(this.id);
  }

}
