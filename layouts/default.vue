<script>
const cookie = useCookie()

</script>
<template>
  <header></header>
  <main>
    <slot />
  </main>
  <footer style="position: relative;">
    <button style="position: fixed; bottom: 5px; right: 5px;">Test</button>
  </footer>
</template>
