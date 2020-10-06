import {Component, OnInit} from '@angular/core';
import {IOrigin} from '../../shared/models/origin.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public originEnum = IOrigin;

  constructor() {
  }

  ngOnInit(): void {
  }

}
