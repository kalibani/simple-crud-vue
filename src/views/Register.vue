<template>
  <b-container class="d-flex justify-content-center">

  <b-row align-v="center">
    <b-col>
      <div class="text-left wrapper-form">
        <FormRegister />
      </div>
    </b-col>
  </b-row>


</b-container>
</template>

<script>
import FormRegister from '@/components/FormRegister';

export default {
  name: 'Register',
  components: {
    FormRegister,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    min-width: 100%;
    margin: auto;
    padding: auto;
    background: #2c4c7c;

  }
</style>
