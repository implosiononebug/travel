<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
    <li class="item">H</li>
    <li class="item">I</li>
    <li class="item">J</li>
    <li class="item">K</li>
    <li class="item">L</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style scoped>
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 6.5rem;
    right:0;
    bottom:0;
    width:1.5rem;
  }
  .item {
    padding: .1rem 0 .1rem 0;
    color: #6fbdf1;
  }
</style>


