<template>
  <div class="checked-group d-flex align-center justify-start">
    <div class="radio-control">
      <input type="radio" id="">
      <label for=""></label>
    </div>
    <slot name="checkedContent"></slot>
  </div>
</template>

<script>

export default {
  name: 'Radio',
}
</script>

<style src="./Checked.scss" lang="scss"/>

