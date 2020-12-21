<template>
  <div id="Tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#Tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>