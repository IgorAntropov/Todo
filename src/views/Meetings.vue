<template>
  <div class="main__main-block main-block">
    <div class="main-block__container _container">
      <h1 class="main-block__title">
        Meetings
      </h1>
      <span class="main-block__description">
        You opened "Meetings" view
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "meetings"
}
</script>

<style lang="scss" scoped>
.main-block {
  .main-block__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .main-block__title {
      color: var(--color-for-title);
    }

    .main-block__description {
      color: var(--color-for-text);
    }
  }
}
</style>