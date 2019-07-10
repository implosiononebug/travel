<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function () {
    return {
      msg: 'welcome to vue app'
    }
  }
}
</script>
