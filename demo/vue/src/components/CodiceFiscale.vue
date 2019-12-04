<template>
  <div class="container">
    <div class="row">
      <b-form-group
        :state="stateCf"
        description="Codice fiscale"
        label="Enter Codice Fiscale"
        label-for="cf"
        :invalid-feedback="invalidCf"
        class="col-12"
      >
        <b-form-input :state="stateCf" id="cf" v-model="cf"></b-form-input>
      </b-form-group>

      <hr class="col-12"/>

      <b-form-group
        :state="stateSurname"
        description="Surname"
        label="Enter Surname"
        label-for="surname"
        :invalid-feedback="invalidSurname"
        class="col-6"
      >
        <b-form-input :state="stateSurname" id="surname" v-model="surname" trim></b-form-input>
      </b-form-group>

      <b-form-group
        :state="stateName"
        description="Name"
        label="Enter Name"
        label-for="name"
        :invalid-feedback="invalidName"
        class="col-6"
      >
        <b-form-input :state="stateName" id="name" v-model="name" trim></b-form-input>
      </b-form-group>

      <b-form-group
        :state="stateDate"
        description="Birth Date"
        label="Enter Birth Date"
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
        label="Enter Birth Place"
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
import * as CodiceFiscaleUtils from '../../../../dist/codice-fiscale-utils.system.min.js';
export default {
  name: 'CodiceFiscale',
  computed: {
    stateCf() {
      if(!(this.cf || '').length) {
        return null;
      }
      const personalInfoCheck = CodiceFiscaleUtils.Validator.codiceFiscale({
          surname: this.surname,
          name: this.name,
          date: this.date,
          gender: this.gender,
          place: this.place
        });
      return CodiceFiscaleUtils.Validator.isValid(this.cf) &&
        personalInfoCheck.test(this.cf);
    },
    stateSurname() {
      if(!(this.surname || '').length) {
        return null;
      }
      return CodiceFiscaleUtils.Validator.surname(this.cf).test(this.surname);
    },
    stateName() {
      if(!(this.name || '').length) {
        return null;
      }
      return CodiceFiscaleUtils.Validator.name(this.cf).test(this.name);
    },
    stateDate() {
      if(!this.date) {
        return null;
      }
      return moment(this.date).isValid() && CodiceFiscaleUtils.Validator.date(this.cf).test(this.date);
    },
    stateGender() {
      if(!this.gender) {
        return null;
      }
      return CodiceFiscaleUtils.Validator.gender(this.cf).test(this.gender);
    },
    statePlace() {
      if(!this.place) {
        return null;
      }
      const placeSubset = moment(this.date).isValid() ? CodiceFiscaleUtils.Belfiore.active(this.date) : CodiceFiscaleUtils.Belfiore;
      const placeData = placeSubset.findByName(this.place);
      return !!placeData && !!CodiceFiscaleUtils.Validator.place(this.cf).test(this.place);
    },
    invalidCf() {
      if ((this.cf || '').length <16) {
        return 'Please enter a full 16 chars Codice Fiscale';
      }
      if ((this.cf || '').length > 16) {
        return `You wrote ${this.cf.length} chars, a valid CF should be 16 chars only`;
      }
      if (!CodiceFiscaleUtils.Validator.isValid(this.cf)) {
        return 'Please enter a valid Codice Fiscale';
      }
      const fieldChecker = {
        surname: this.stateSurname,
        name: this.stateName,
        date: this.stateDate,
        gender: this.stateGender,
        place: this.statePlace
      };
      const fieldsToCheck = Object.entries(fieldChecker)
        .filter(([,check]) => check === false)
        .map(([key]) => key);
      return `The Codice Fiscale doesn't match ${fieldsToCheck.join(', ')}`;
    },
    invalidSurname: () => 'The provided surname doesn\'t match the current Codice Fiscale',
    invalidName: () => 'The provided name doesn\'t match the current Codice Fiscale',
    invalidDate() {
      if (!moment(this.date).isValid()) {
        return 'Please enter a valid date';
      }
      return 'The provided date doesn\'t match the current Codice Fiscale';
    },
    invalidGender: () => 'The provided gender doesn\'t match the current Codice Fiscale',
    invalidPlace() {
      if (!CodiceFiscaleUtils.Belfiore.findByName(this.place)) {
        return 'Please enter a valid city or country name';
      }
      if (moment(this.date).isValid() && !CodiceFiscaleUtils.Belfiore.active(this.date).findByName(this.place)) {
        return 'The provided place seems to be expired or not yet founded for the given birth date';
      }
      return 'The provided place doesn\'t match the current Codice Fiscale';
    }
  },
  data() {
    return {
      cf: null,
      surname: null,
      name: null,
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
