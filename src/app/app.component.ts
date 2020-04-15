import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'World';
  itembuah = [{
      nama: 'kelengkeng',
      harga: 10000
  }, {
      nama: 'Jeruk',
      harga: 15000
  }];
  ItemArr=['aa', 'bb', 'cc', 'dd'];
  show: boolean=false
  
  user="";

  pesan='';
  klikButton(){
    this.pesan = 'Tombol Ditekan';
  }
}
