<template>
  <footer class="footer">
    <div class="footer__container _container">
      <span class="title">
        To-do list
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  border-top: 1px solid var(--color-for-border);
  background: var(--color-for-other-background);

  .footer__container {
    max-height: 50px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-size: calc(1em + 1vw);
      color: var(--color-for-title);
    }
  }
}
</style>