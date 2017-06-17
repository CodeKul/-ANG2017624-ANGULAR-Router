import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  usNm: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.usNm = this.activatedRoute.snapshot.params['usNm'];
  }
}
