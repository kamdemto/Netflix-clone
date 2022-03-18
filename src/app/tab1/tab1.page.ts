import { Component } from '@angular/core';

import { MoviePage } from '../movie/movie.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public ModalController: ModalController ) {}

  async openMovie(){

    const modal = await this.ModalController.create({
     component : MoviePage

    });
    return await modal.present();
  }

}
