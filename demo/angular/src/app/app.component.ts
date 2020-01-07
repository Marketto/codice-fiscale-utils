import { Component, OnInit } from '@angular/core';
import { Belfiore, BelfioreConnector, Validator, BelfiorePlace, Genders } from '@marketto/codice-fiscale-utils';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import CfValidators, { ValidationError } from './validators/cf-vaidators';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cfFormGroup = new FormGroup ({
    codiceFiscale: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      CfValidators.codiceFiscale.format
    ]),
    lastName: new FormControl('', [
      Validators.required,
      CfValidators.lastName.format,

    ]),
    firstName: new FormControl('', [
      Validators.required,
      CfValidators.firstName.format,

    ]),
    birthDate: new FormControl('', [
      Validators.required,
      CfValidators.birthDate.placeMismatch(() => this.cfFormGroup.get('place').value),

    ]),
    gender: new FormControl('', [
      Validators.required,

    ]),
    area: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      CfValidators.birthArea.format,
      (): null => {
        if (this.cfFormGroup) {
          this.cfFormGroup.get('place').reset();
        }
        return null;
      }
    ]),
    place: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      CfValidators.birthPlace.exists(() => this.cfFormGroup.get('area').value),

    ])
  }, {
    validators: [
      CfValidators.group.birthDatePlaceMismatch('birthDate', 'place'),
      CfValidators.group.cfLastNameMismatch('codiceFiscale', 'lastName'),
      CfValidators.group.cfFirstNameMismatch('codiceFiscale', 'firstName'),
      CfValidators.group.cfBirthDateMismatch('codiceFiscale', 'birthDate'),
      CfValidators.group.cfGenderMismatch('codiceFiscale', 'gender'),
      CfValidators.group.cfBirthPlaceMismatch('codiceFiscale', 'place'),
    ]
  });

  public FOREGIN_COUNTRIES_LABEL = 'Stati esteri';
  public minDate: Date = moment().subtract(130, 'y').toDate();
  public maxDate: Date = moment().subtract(1, 'd').toDate();
  private areas: Array<string | symbol> = [
    ...Belfiore.provinces,
    CfValidators.constant.COUNTRIES,
  ];
  public filteredAreas: Observable<string[]>;
  public filteredPlaces: Observable<BelfiorePlace[]>;

  private getScopedBelfiore(): BelfioreConnector {
    if (this.cfFormGroup.controls.area && this.cfFormGroup.controls.area.value) {
      const area = this.cfFormGroup.controls.area.value;
      if (area === CfValidators.constant.COUNTRIES) {
        return Belfiore.countries;
      }
      if (this.areas.includes(area.toUpperCase().trim())) {
        const areaByProvince = Belfiore.cities.byProvince(area);
        if (areaByProvince) {
          return areaByProvince;
        }
      }
    }
    return Belfiore;
  }

  private getFilteredErrorList(
    filter: (value: [string, unknown]) => boolean
  ): { key: string, value: unknown }[] {
    if (this.cfFormGroup && this.cfFormGroup.errors) {
      return Object.entries(this.cfFormGroup.errors)
        .filter(filter)
        .map(([key, value]) => ({ key, value }));
    }
    return [];
  }

  public get cfMismatchErrors() {
    return this.getFilteredErrorList(([errorId]) => (/cf[a-zA-Z]+Mismatch/).test(errorId));
  }

  public get dateMismatchErrors() {
    return this.getFilteredErrorList(([errorId]) => (/[bB]irth[a-zA-Z]*Date[a-zA-Z]*Mismatch/).test(errorId));
  }

  public get placeMismatchErrors() {
    return this.getFilteredErrorList(([errorId]) => (/[bB]irth[a-zA-Z]*Place[a-zA-Z]*Mismatch/).test(errorId));
  }

  public displayArea(area: string | symbol): string {
    if (typeof area === 'string') {
      return area;
    } else if (area === CfValidators.constant.COUNTRIES) {
      return this.FOREGIN_COUNTRIES_LABEL;
    }
    return;
  }

  public displayPlace(place: BelfiorePlace): string {
    return place ? place.name.toLowerCase() : undefined;
  }

  ngOnInit() {
    this.filteredAreas = this.cfFormGroup.controls.area.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          /*if (!value || value !== this.cfFormGroup.controls.area.value) {
            this.cfFormGroup.get('place').reset();
          }*/
          if (value === CfValidators.constant.COUNTRIES) {
            return [CfValidators.constant.COUNTRIES];
          } else if (typeof value === 'string') {
            const matcher = new RegExp(`^${value}`, 'i');
            return this.areas.filter(area => matcher.test(this.displayArea(area)));
          }
          return [];
        })
      );

    this.filteredPlaces = this.cfFormGroup.controls.place.valueChanges
      .pipe(
        startWith(''),
        map((value: string | BelfiorePlace) => {
          if (value) {
            if (!this.cfFormGroup.controls.area || this.cfFormGroup.controls.area.invalid) {
              return [];
            }
            if (typeof value === 'string') {
              const matcher = new RegExp(`^${value}`, 'i');
              return (this.getScopedBelfiore()
                .searchByName(value) || [])
                .sort((a, b) => ((matcher.test(a.name) ? 0 : 1) - (matcher.test(b.name) ? 0 : 1)) ||
                  (a.name > b.name ? -1 : (a.name < b.name ? 1 : 0)));
            } else if (typeof value === 'object' && value.belfioreCode) {
              return [this.getScopedBelfiore()[value.belfioreCode]];
            }
          }
          return [];
        })
      );
  }
}
