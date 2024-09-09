<template>
  <div class="customHeaderLabel">
    <VDropdown>
      <button>{{ params.displayName }}</button>
      <template #popper>Test</template>
    </VDropdown></div>
</template>

<script>
export default {
  name: "CustomHeader",
};
</script>
