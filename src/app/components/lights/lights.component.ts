import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Light } from 'src/app/models/interfaces';
import { vmLight } from 'src/app/models/ui-interfaces';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {
  vmlights?: vmLight[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.vmlights = [];
    this.httpService.getAllLights().subscribe((data: any) => {
      Object.keys(data).forEach((key) => {
        this.vmlights?.push({
          id: key,
          ...data[key],
        });
      });
      console.log(this.vmlights);
    });
  }
}
