<template>
  <div class="container">
    <div class="row">
      <b-form-group
        :state="stateCf"
        description="Codice fiscale"
        label="Codice Fiscale"
        label-for="cf"
        :invalid-feedback="invalidCf"
        class="col-12"
      >
        <b-form-input :state="stateCf" id="cf" v-model="cf"></b-form-input>
      </b-form-group>

      <hr class="col-12"/>

      <b-form-group
        :state="stateLastName"
        description="Last Name"
        label="Last Name"
        label-for="lastName"
        :invalid-feedback="invalidLastName"
        class="col-6"
      >
        <b-form-input :state="stateLastName" id="lastName" v-model="lastName" trim></b-form-input>
      </b-form-group>

      <b-form-group
        :state="stateFirstName"
        description="First Name"
        label="First Name"
        label-for="name"
        :invalid-feedback="invalidFirstName"
        class="col-6"
      >
        <b-form-input :state="stateFirstName" id="firstName" v-model="firstName" trim></b-form-input>
      </b-form-group>

      <b-form-group
        :state="stateDate"
        description="Birth Date"
        label="Birth Date"
        label-for="date"
        :invalid-feedback="invalidDate"
        class="col-4"
      >
        <b-form-input :state="stateDate" id="date" v-model="date" trim type="date"></b-form-input>
      </b-form-group>

      <b-form-group
        :state="stateGender"
        description="Gender"
        label="Select gender"
        :invalid-feedback="invalidGender"
        class="col-4"
      >
        <div class="container">
            <div class="row">
              <b-form-radio class="col-6" v-model="gender" name="gender" value="M">Male</b-form-radio>
              <b-form-radio class="col-6" v-model="gender" name="gender" value="F">Female</b-form-radio>
            </div>
        </div>
      </b-form-group>

      <b-form-group
        :state="statePlace"
        description="Birth Place"
        label="Birth Place"
        label-for="place"
        :invalid-feedback="invalidPlace"
        class="col-4"
      >
        <b-form-input list="place-list" v-model="place" :state="statePlace"></b-form-input>
        <datalist id="place-list">
          <option v-for="entry in places(cf, date, place)" v-bind:key="entry.belfioreCode">{{ entry.name }}</option>
        </datalist>
      </b-form-group>
    </div>
  </div>
</template>

<script>

import * as moment from 'moment';
import * as CodiceFiscaleUtils from '@marketto/codice-fiscale-utils';
export default {
  name: 'CodiceFiscale',
  computed: {
    stateCf() {
      if (!this.cf){
        return null;
      }
      return CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).valid
        && !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchPersonalInfo({
          lastName: this.lastName,
          firstName: this.firstName,
          date: this.date,
          gender: this.gender,
          place: this.place
        });
    },
    stateLastName() {
      if (!this.lastName){
        return null;
      }
      return CodiceFiscaleUtils.Validator.isLastNameValid(this.lastName) &&
        !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchLastName(this.lastName);
    },
    stateFirstName() {
      if (!this.firstName){
        return null;
      }
      return CodiceFiscaleUtils.Validator.isFirstNameValid(this.firstName) &&
        !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchFirstName(this.firstName);
    },
    stateDate() {
      if (!this.date){
        return null;
      }
      return CodiceFiscaleUtils.Validator.isBirthDateValid(this.date) &&
        !CodiceFiscaleUtils.Validator.birthDatePlaceMismatch(this.date, this.place) &&
        !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchBirthDate(this.date);
    },
    stateGender() {
      if (!this.gender){
        return null;
      }
      return CodiceFiscaleUtils.Validator.isGenderValid(this.gender) &&
        !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchGender(this.gender);
    },
    statePlace() {
      if (!this.place){
        return null;
      }
      return CodiceFiscaleUtils.Validator.isBirthPlaceValid(this.place) &&
        !CodiceFiscaleUtils.Validator.birthPlaceDateMismatch(this.place, this.date) &&
        !CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).mismatchBirthPlace(this.place);
    },
    invalidCf() {
      if ((this.cf || '').length <16) {
        return 'Please enter a full 16 chars Codice Fiscale';
      }
      if ((this.cf || '').length > 16) {
        return `You wrote ${this.cf.length} chars, a valid CF should be 16 chars only`;
      }
      if (CodiceFiscaleUtils.Validator.codiceFiscale(this.cf).invalid) {
        return 'Please enter a valid Codice Fiscale';
      }
      const fieldChecker = {
        lastName: this.stateLastName,
        firstName: this.stateFirstName,
        date: this.stateDate,
        gender: this.stateGender,
        place: this.statePlace
      };
      const fieldsToCheck = Object.entries(fieldChecker)
        .filter(([,check]) => check === false)
        .map(([key]) => key);
      return `The Codice Fiscale doesn't match ${fieldsToCheck.join(', ')}`;
    },
    invalidLastName: () => 'Provided Last name is not valid or doesn\'t match the current Codice Fiscale',
    invalidFirstName: () => 'Provided First name is not valid or doesn\'t match the current Codice Fiscale',
    invalidDate() {
      if (CodiceFiscaleUtils.Validator.isBirthDateInvalid(this.date)) {
        return 'Please enter a valid date';
      }
      return 'Provided date doesn\'t match the current Codice Fiscale';
    },
    invalidGender: () => 'Provided gender doesn\'t match the current Codice Fiscale',
    invalidPlace() {
      if (CodiceFiscaleUtils.Validator.isBirthPlaceInvalid(this.place)) {
        return 'Please enter a valid city or country name';
      }
      if (CodiceFiscaleUtils.Validator.birthPlaceDateMismatch(this.place, this.date)) {
        return 'Provided place seems to be expired or not yet founded for the given birth date';
      }
      return 'Provided place doesn\'t match the current Codice Fiscale';
    }
  },
  data() {
    return {
      cf: null,
      lastName: null,
      firstName: null,
      date: null,
      gender: null,
      place: null,
      places(cf, date, place) {
        const active = moment(date).isValid() ? CodiceFiscaleUtils.Belfiore.active(date) : CodiceFiscaleUtils.Belfiore;
        return (place || '').length > 2 ? active.searchByName(place).sort((a, b) => a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)) : [];
      }
    }
  }
}
</script>
