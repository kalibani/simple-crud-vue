<template>
  <div class="text-left wrapper-form">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
      >
      <b-form-input
        id="input-1"
        v-model="form.username"
        type="text"
        required
        placeholder="Enter Username"
        autocomplete="off"
        autofocus
      ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter Password"
      ></b-form-input>
      </b-form-group>
      <div class="text-danger font-weight-bold text-capitalize" v-if="errorMessage">
        {{ errorMessage }}!
      </div>

      <b-button
        pill
        type="submit"
        variant="success"
        :disabled="isLoading"
        >
      <b-spinner small variant="success" label="Spinning" v-if="isLoading">
      </b-spinner>
      {{ isLoading ? '' : 'Register' }}
      </b-button>

      <div class="float-right mt-4">
        <b-link to="/" class="text-light">back to login</b-link>
      </div>
    </b-form>
    <b-toast id="my-toast" variant="success" solid>
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Success Register!</strong>
        </div>
      </template>
      You have been Success Registered!
    </b-toast>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Form',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters('login', ['errorMessage', 'isLoading']),
  },
  methods: {
    ...mapActions('login', ['doRegister']),
    async onSubmit() {
      await this.doRegister(this.form);
      this.$bvToast.show('my-toast');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper-form {
  width: 300px;
  color: #fff;
  .form-group {
    border-bottom: 1px solid #fff;
    font-size: 12px;
    .bv-no-focus-ring {
      .form-control {
        background-color:  #2c4c7c;
        color:  #fff;
        border: 0;
        outline: 0;
        &::placeholder {
          color: #fff;
          opacity: 1; /* Firefox */
        }
        &:focus {
          box-shadow: none !important;
        }
      }
    }

  }
  .btn-success {
    background-color: #008873;
    border-color: #008873;
    width: 100px;
    margin-top: 20px;
  }
}
</style>
