<template>
  <b-container class="justify-content-center">
    <b-row align-v="center">
      <b-col>
        <router-link to="/book" class="float-right mt-4">
          Back to home
        </router-link>
        <b-card class="mt-5">
          <b-form @submit.prevent="onSubmit()">
            <b-form-group
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0 bg-white"
            >
               <b-form-group
                label-cols-sm="3"
                label="ISBN:"
                label-align-sm="right"
                label-for="nested-isbn"
              >
                <b-form-input id="nested-isbn" v-model="form.isbn" disabled=""></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Title:"
                label-align-sm="right"
                label-for="nested-title"
              >
                <b-form-input
                  placeholder="Enter title"
                  id="nested-title"
                  :class="{ 'border-danger': $v.form.title.$error }"
                  v-model.trim="$v.form.title.$model">
                </b-form-input>
                <div class="text-danger mt-1"
                v-if="!$v.form.title.required && $v.form.title.$dirty">Field is required.</div>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Author:"
                label-align-sm="right"
                label-for="nested-author"
              >
                <b-form-input
                  placeholder="Enter author"
                  id="nested-author"
                  :class="{ 'border-danger': $v.form.author.$error }"
                  v-model.trim="$v.form.author.$model">
                </b-form-input>
                <div class="text-danger mt-1"
                v-if="!$v.form.author.required && $v.form.author.$dirty">Field is required.</div>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Publisher Name:"
                label-align-sm="right"
                label-for="nested-publisher-name"
              >
                <b-form-input
                  id="nested-publisher-name"
                  placeholder="Enter publisher name"
                  :class="{ 'border-danger': $v.form.publisher_name.$error }"
                  v-model.trim="$v.form.publisher_name.$model">
                </b-form-input>
                <div class="text-danger mt-1"
                v-if="!$v.form.publisher_name.required
                && $v.form.publisher_name.$dirty">Field is required.</div>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Publisher Year:"
                label-align-sm="right"
                label-for="nested-publisher-year"
              >
                <b-form-datepicker
                  id="nested-publisher-year"
                  placeholder="Choose publisher date"
                  :class="{ 'border-danger': $v.form.publisher_year.$error }"
                  v-model.trim="$v.form.publisher_year.$model"
                  local="en">
                </b-form-datepicker>
                <div class="text-danger mt-1"
                v-if="!$v.form.publisher_year.required
                && $v.form.publisher_year.$dirty">Field is required.</div>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Genre:"
                label-align-sm="right"
                label-for="nested-genre"
              >
                <b-form-select
                  id="nested-genre"
                  :class="{ 'border-danger': $v.form.genre.$error }"
                  v-model.trim="$v.form.genre.$model" :options="options">
                </b-form-select>
                <div class="text-danger mt-1"
                v-if="!$v.form.genre.required
                && $v.form.genre.$dirty">Field is required.</div>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Synopsis:"
                label-align-sm="right"
                label-for="nested-synopsis"
              >
                <b-form-textarea
                  placeholder="Write synopsis"
                  id="nested-synopsis"
                  v-model="form.synopsis"
                  rows="3"
                  max-rows="6">
                </b-form-textarea>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Status:"
                label-align-sm="right"
              >
                <b-form-radio-group
                  v-model="form.status"
                  class="pt-2"
                  value-field="item"
                  text-field="name"
                  :options="optionsRadio"
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-button
                type="submit"
                variant="success"
                >
                Submit
              </b-button>
              </b-form-group>

            </b-form-group>
          </b-form>
        </b-card>
        <b-toast id="my-toast" variant="success" solid>
          <template v-slot:toast-title>
            <div class="d-flex flex-grow-1 align-items-baseline">
              <strong class="mr-auto">Success add a book!</strong>
            </div>
          </template>
          {{ successMessage }}
        </b-toast>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddBook',
  data() {
    return {
      modalShow: false,
      id: this.$route.params.id,
      form: {
        isbn: '',
        title: '',
        author: '',
        publisher_name: '',
        publisher_year: null,
        genre: '',
        synopsis: '',
        status: true,
      },
      options: [
        { value: '', text: 'Please select an option' },
        { value: 'Horor', text: 'Horor' },
        { value: 'Fantasi', text: 'Fantasi' },
        { value: 'Romance', text: 'Romance' },
        { value: 'Humor', text: 'Humor' },
        { value: 'Misteri', text: 'Misteri' },
        { value: 'Biografi', text: 'Biografi' },
        { value: 'Jurnal', text: 'Jurnal' },
        { value: 'Sejarah', text: 'Sejarah' },
      ],
      optionsRadio: [
        { item: true, name: 'Active' },
        { item: false, name: 'inactive' },
      ],
    };
  },
  validations: {
    form: {
      title: {
        required,
      },
      author: {
        required,
      },
      publisher_name: {
        required,
      },
      publisher_year: {
        required,
      },
      genre: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters('books', ['successMessage', 'isLoading', 'book']),
  },
  async mounted() {
    this.handleUpdateValue();
  },
  methods: {
    ...mapActions('books', ['fetchBook', 'updateBook']),
    async handleUpdateValue() {
      await this.fetchBook(this.$route.params.id);
      this.form = this.book;
    },
    async onSubmit() {
      this.$v.$touch();
      console.warn('object', this.form);
      if (!this.$v.$invalid) {
        const payload = {
          id: this.$route.params.id,
          form: this.form,
        };
        await this.updateBook(payload);
        if (this.successMessage) {
          this.$bvToast.show('my-toast');
        }
      }
    },
  },
};
</script>
