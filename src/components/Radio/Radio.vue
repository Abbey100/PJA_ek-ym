<template>
    <label for="chk" class="chk-ctrl">
      <input id="chk" type="checkbox" :value="checked" @input="$emit('input', !checked)" />
      {{ label }}
    </label>
</template>

<script>

export default {
  name: 'Checkbox',
  props : {
      checked : {
          type : boolean,
          default : "false",
      },
      label: String.
  },

  model : {
    prop : 'checked',
    event: 'input'
  }

}
</script>

<style src="./Checkbox.scss" lang="scss"/>

