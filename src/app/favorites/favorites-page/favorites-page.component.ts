import {Component, OnInit} from '@angular/core';
import {LocalService} from '../../shared/services/local.service';
import {IOrigin} from '../../shared/models/origin.model';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  public originEnum = IOrigin;

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.localService.getList();
  }

}
