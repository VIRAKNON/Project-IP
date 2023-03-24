<template>
  <div class="checkout">
    <h1>This is an checkout page</h1>
    <br />
    <button @click="$emit('cancel')" class="btn btn-primary">Cancel</button>
  </div>
</template>

<style>
@media (min-width: 1618px) {
  .checkout {
    min-height: 100vh;
  }
}
</style>
