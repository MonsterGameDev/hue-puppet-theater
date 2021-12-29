import { Component, Input, OnInit } from '@angular/core';
import { Light } from 'src/app/+state/state.interfaces';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  @Input() light?: Light;
  bgColor: any;

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {
    const x = this.light?.state?.xy[0];
    const y = this.light?.state?.xy[1];
    const bri = this.light?.state?.bri;
    const rgbObj = this.converterService.xyBriToRgb(x, y, bri);

    this.bgColor = `rgb(${rgbObj.r},${rgbObj.g},${rgbObj.b})`;
  }
}
