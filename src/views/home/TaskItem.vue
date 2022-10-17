<template>
  <div
      class="task-item"
      v-bind:class="taskStatus"
      @click="switchDetailsTaskModal"
  >
    <h1 class="title">
      {{ task.title }}
    </h1>
    <div class="task-status-block">
      <button
          @click.prevent="changeStatus"
          v-if="taskStatus === 'common'"
          class="status-btn"
          v-bind:class="taskStatus"
      >
        <i class="material-icons status-icon">content_paste_go</i>
      </button>
      <button
          @click.prevent="changeStatus"
          v-if="taskStatus === 'process'"
          class="status-btn prev-status"
          v-bind:class="taskStatus"
      >
        <i class="material-icons status-icon">content_paste_off</i>
      </button>
      <button
          @click.prevent="changeStatus"
          v-if="taskStatus === 'process'"
          class="status-btn next-status"
          v-bind:class="taskStatus"
      >
        <i class="material-icons status-icon">task</i>
      </button>
      <button
          v-if="taskStatus === 'closed'"
          class="status-btn"
          v-bind:class="taskStatus"
      >
        <i class="material-icons status-icon">task_alt</i>
      </button>
      <button
          class="status-btn delete-task-btn"
          @click.prevent="removeTask"
      >
        <i class="material-icons status-icon">delete_forever</i>
      </button>
    </div>
    <div class="task-description">
      <span class="time description">
        {{ getFormatDate }}
      </span>
      <span class="description">
        {{ task.description }}
      </span>
    </div>
  </div>
  <Modal v-if="isOpenDetailsTask" @closeModal="switchDetailsTaskModal">
    <template v-slot:header>
      <span class="title">Edit task</span>
      <button class="close-modal" @click="switchDetailsTaskModal"><i class="material-icons">close</i></button>
    </template>
    <template v-slot:body>
      <div class="task-content">
        <input v-model="taskTitle" placeholder="Task title">
        <input
            class="choose-date"
            placeholder="Task due"
            onfocus="(this.type = 'datetime-local')"
            onblur="(this.type = 'text')"
            v-model="getFormatDate"
            @change="changeDate"
        >
        <textarea v-model="taskDescription" placeholder="Task description" rows="5"></textarea>
      </div>
    </template>
    <template v-slot:footer>
      <button class="btn-danger" @click="switchDetailsTaskModal">Cancel</button>
      <button class="btn-success" @click="saveChanges">Save</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "../../components/modal.vue";
import {mapActions} from "vuex";

export default {
  data: () => ({
    isOpenDetailsTask: false,
    taskTitle: '',
    taskDate: '',
    taskDescription: '',
    taskStatus: '',
  }),
  name: "TaskItem",
  props: [
    'task'
  ],
  mounted() {
    this.setData();
  },
  updated() {
    this.setData();
  },
  components: {
    Modal,
  },
  computed: {
    switchDetailsTaskModal() {
      return (event) => {
        if (event) {
          if (!event.target.classList.contains('status-btn') && !event.target.classList.contains('status-icon')) {
            this.isOpenDetailsTask = !this.isOpenDetailsTask;
          }
        } else {
          this.isOpenDetailsTask = !this.isOpenDetailsTask;
        }
      }
    },
    getFormatDate() {
      return `${new Date(this.taskDate).toLocaleDateString()} ${new Date(this.taskDate).toLocaleTimeString()}`;
    },
    setData() {
      return () => {
        this.taskTitle = this.task.title;
        this.taskDate = this.task.due;
        this.taskDescription = this.task.description;
        this.taskStatus = this.task.status;
      }
    },
  },
  methods: {
    ...mapActions(
        [
          'changeTask',
          'deleteTask',
        ]
    ),
    saveChanges(needSwitch = true) {
      const payload = {
        id: this.task.id,
        title: this.taskTitle,
        description: this.taskDescription,
        due: this.taskDate,
        status: this.taskStatus
      };

      this.changeTask(payload);

      if (needSwitch) {
        this.switchDetailsTaskModal();
      }
    },
    changeDate(event) {
      this.taskDate = event.currentTarget.value;
      this.saveChanges(false);
    },
    changeStatus(event) {
      const target = event.currentTarget;

      if (target.classList.contains('common')) {
        this.taskStatus = 'process';
      }

      if (target.classList.contains('process')) {
        if (target.classList.contains('prev-status')) {
          this.taskStatus = 'common';
        } else {
          this.taskStatus = 'closed';
        }
      }

      this.saveChanges(false);
    },
    removeTask() {
      this.deleteTask(this.task.id);
    },
  }
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
  position: relative;

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
    pointer-events: none;

    &:hover {
      background: rgba(6, 175, 3, 0.5);
    }

    .title {
      color: white;
    }

    .delete-task-btn {
      pointer-events: auto;
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

  .task-status-block {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    .status-btn {
      min-width: 40px;
      max-width: 40px;
      min-height: 40px;
      max-height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0 3px;
      cursor: pointer;
      z-index: 50;
      border: none;
      box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);

      &.delete-task-btn {
        color: red;
      }
      &.common {
        color: var(--color-status-process);
      }
      &.process {
        &.next-status {
          color: var(--color-status-closed);
        }
      }
      &.closed {
        color: var(--color-status-closed);
      }
    }
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

.task-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input, textarea {
    width: 100%;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    border: 1px solid #858585FF;
  }

  input {
    min-height: 45px;
    max-height: 45px;

    &.choose-date {
      position: relative;

      &::-webkit-calendar-picker-indicator {
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }

  textarea {
    resize: none;
  }
}
</style>