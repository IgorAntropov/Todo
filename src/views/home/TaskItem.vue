<template>
  <div
      class="task-item"
      v-bind:class="task.status"
  >
    <h1 class="title">
      {{ task.title }}
    </h1>
    <div class="task-description">
      <span class="time description">
        {{ `${new Date(task.due).toLocaleDateString()} ${new Date(task.due).toLocaleTimeString()}` }}
      </span>
      <span class="description">
        {{ task.description }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: [
    'task'
  ]
}
</script>

<style lang="scss" scoped>
.task-item {
  border-radius: 15px;
  border: 1px solid var(--color-for-border);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  margin: 0 0 5px 0;

  &.common {
    background: var(--color-status-common);

    &:hover {
      background: var(--color-for-hover);
    }
  }

  &.process {
    background: var(--color-status-process);

    &:hover {
      background: rgba(229, 150, 4, 0.5);
    }

    .title {
      color: white;
    }

    .task-description {
      .description {
        color: white;
      }
    }
  }

  &.closed {
    background: var(--color-status-closed);

    &:hover {
      background: rgba(6, 175, 3, 0.5);
    }

    .title {
      color: white;
    }

    .task-description {
      .description {
        color: white;
      }
    }
  }

  .title {
    color: black;
    font-size: calc(1em + 1vw);
  }

  .task-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    .description {
      color: black;
      font-size: calc(0.5em + 1vw);
    }
  }
}
</style>