import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Light, Lights } from 'src/app/+state/state.interfaces';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  @Input() light?: Light;
  bgColor: any;

  constructor(
    private converterService: ConverterService,
    private store: Store<Lights>
  ) {}

  ngOnInit(): void {
    const x = this.light?.state?.xy[0];
    const y = this.light?.state?.xy[1];
    const bri = this.light?.state?.bri;
    const rgbObj = this.converterService.xyBriToRgb(x, y, bri);

    this.light?.state.on
      ? (this.bgColor = `rgb(${rgbObj.r},${rgbObj.g},${rgbObj.b})`)
      : (this.bgColor = 'black');
  }

  clickHandler(e: any) {
    e.stopPropagation();
    console.log('light clicked', this.light?.state);
  }
}
