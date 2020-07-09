<template>
  <b-form-input
    :id="id"
    :value="value"
    :type="type"
    :required="isRequired"
    :placeholder="placeholder"
  ></b-form-input>
</template>

<script>
export default {
  name: 'LoginInput',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    value: String,
    type: {
      type: String,
      required: true,
      default: 'text',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style>

</style>
