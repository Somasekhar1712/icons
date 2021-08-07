import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  icons: any = [];
  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.getIconsData();
  }

  getIconsData() {
    this.iconsService.getIcons().subscribe(
      (data: any) => {
        console.log('data', data);
        this.icons = data['data'];
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
}
