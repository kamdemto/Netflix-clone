import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor( public ModalController: ModalController) { }

  ngOnInit() {
  }
  
  close(){
    this.ModalController.dismiss();
  }
}
