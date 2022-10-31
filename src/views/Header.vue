<template>
  <header class="header">
    <div class="header__container _container">
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item active-tab" data-route="home" @click.prevent="checkActiveTab">
            <RouterLink class="menu__link" to="/">Home</RouterLink>
          </li>
          <li class="menu__item" data-route="calendar" @click.prevent="checkActiveTab">
            <RouterLink class="menu__link" to="/calendar">Calendar</RouterLink>
          </li>
          <li class="menu__item" data-route="meetings" @click.prevent="checkActiveTab">
            <RouterLink class="menu__link" to="/meetings">Meetings</RouterLink>
          </li>
          <li class="menu__item" data-route="settings" @click.prevent="checkActiveTab">
            <RouterLink class="menu__link" to="/settings">Settings</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="profile" data-route="profile" @click.prevent="checkActiveTab">
        <RouterLink class="menu__link" to="/profile">
          <i class="material-icons">account_circle</i>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "header",
  components: {
    RouterLink
  },
  mounted() {
    this.checkActiveTab();
  },
  methods: {
    checkActiveTab() {
      const activeTab = document.querySelector('.active-tab');
      if (activeTab) {
        activeTab.classList.remove('active-tab');
      }

      const activeRoute = document.querySelector(`[data-route="${this.$route.name}"]`);
      if (activeRoute) {
        activeRoute.classList.add('active-tab');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--color-for-border);
  background: var(--color-for-other-background);

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;

    .active-tab {
      background: var(--color-for-hover);
      border-radius: 15px;
    }

    .header__menu {
      margin: 0 0 0 35px;
    }

    .menu {
      padding: 5px 0;

      .menu__list{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;

        .menu__item {
          list-style-type: none;
          cursor: pointer;

          &:hover {
            background: var(--color-for-hover);
            border-radius: 15px;
          }

          &:not(:last-child) {
            margin: 0 20px 0 0;
          }

          .menu__link {
            color: var(--color-for-title);
            line-height: calc(24 / 14 * 100%);
            font-weight: 600;
            text-decoration: none;
            font-size: calc(1em + 1vw);
            width: 100%;
            height: 100%;
            display: flex;
            padding: 10px;
          }
        }
      }
    }

    .profile {
      cursor: pointer;

      &:hover {
        background: var(--color-for-hover);
        border-radius: 15px;
      }

      i {
        font-size: calc(2em + 2vw);
        color: var(--color-for-title);
        padding: 10px;
      }
    }
  }
}
</style>