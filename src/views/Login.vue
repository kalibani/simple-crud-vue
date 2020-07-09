<template>
  <b-container class="bv-example-row bv-example-row-flex-cols d-flex justify-content-center fluid">

  <b-row align-v="center">
    <b-col>
      <div class="text-left wrapper-form">
        <Form />
      </div>
    </b-col>
  </b-row>


</b-container>
</template>

<script>
import Form from '@/components/Form';

export default {
  name: 'Login',
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },
  components: {
    Form,
  },
  mounted() {
    document.getElementById('input-1').focus();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    margin: auto;
    padding: auto;
  }
</style>
