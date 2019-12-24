import { Component, OnInit } from '@angular/core';
import { Belfiore } from '@marketto/codice-fiscale-utils';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BelfioreConnector } from '../../../../src';

interface IBelfiorePlace {
    belfioreCode: string;
    name: string;
    creationDate: Date;
    expirationDate: Date;
    dataSource: {
      name: string;
      url: string;
      license: string;
      licenseUrl: string;
      termsAndConditions: string;
      authors: string;
    };
    iso3166?: string;
    province?: string;
}

type IGender = 'M' | 'F';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public placeControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    (control: AbstractControl): { [ key: string ]: any } | null => {
      if (control.value) {
        const scopedBelfiore = this.getScopedBelfiore();
        const valueType = typeof control.value;
        if (valueType === 'object' && scopedBelfiore[control.value.belfioreCode]) {
          return null;
        }
        if (valueType === 'string') {
          const place = scopedBelfiore.findByName(control.value);
          if (place) {
            control.setValue(place);
            return  null;
          }
        }
      }
      return { invalidPlace: { value: control.value, area: this.areaControl && this.areaControl.value }};
    }
  ]);

  public areaControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    (control: AbstractControl): { [ key: string ]: any } | null => {
      return Array.isArray(this.areas) && this.areas.includes(control.value) ? null : { invalidArea: { value: control.value }};
    },
    (): null => {
      this.placeControl.reset({ value: '', disabled: false });
      return null;
    }
  ]);

  public FOREGIN_COUNTRY = 'Stati Esteri';
  public cf: string;
  public firstName: string;
  public lastName: string;
  public birthDate: Date;
  public gender: IGender;
  public birthPlace: string;
  private areas: string[];
  public filteredAreas: Observable<string[]>;
  public filteredPlaces: Observable<IBelfiorePlace[]>;
  public birthArea: string;

  constructor() {
  }

  private getScopedBelfiore(): BelfioreConnector {
    if (this.areaControl && this.areaControl.value) {
      const area = this.areaControl.value;
      if (this.FOREGIN_COUNTRY === area) {
        return Belfiore.countries;
      }
      const areaByProvince = Belfiore.cities.byProvince(area);
      if (areaByProvince) {
        return areaByProvince;
      }
    }
    return Belfiore;
  }

  private loadAreas() {
    const cities: IBelfiorePlace[] = Belfiore.cities.toArray();
    const provinceList: string[] = cities.map(({ province }) => province);
    this.areas = Array.from(new Set(provinceList))
      .sort().concat(this.FOREGIN_COUNTRY);
  }

  public displayPlace(place: IBelfiorePlace): string {
    return place ? place.name.toLowerCase() : undefined;
  }

  ngOnInit() {
    this.loadAreas();
    this.filteredAreas = this.areaControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          if (!value || value !== this.areaControl.value) {
            this.placeControl.reset({ value: '', disabled: false });
          }
          const matcher = new RegExp(`^${value}`, 'i');
          return this.areas.filter(area => matcher.test(area));
        })
      );

    this.filteredPlaces = this.placeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          if (!this.areaControl || this.areaControl.invalid) {
            return [];
          }
          const matcher = new RegExp(`^${value}`, 'i');
          return (this.getScopedBelfiore()
            .searchByName(value) || [])
            .sort((a, b) => ((matcher.test(a.name) ? 0 : 1) - (matcher.test(b.name) ? 0 : 1)) || a.name - b.name);
        })
      );
  }
}
