<template>
  <div class="checked-group align-center d-flex justify-start">
    <div class="checkbox-control">
      <input type="checkbox" id="">
      <label for=""></label>
    </div>
    <slot name="checkedContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
}
</script>

<style src="./Checked.scss" lang="scss"/>

