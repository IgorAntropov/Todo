<template>
  <div class="main__main-block main-block">
    <div class="main-block__container _container">
      <div class="main-block__task-container">
        <div
            class="main-block__tasks-list"
            v-if="getFullTasksList.length"
        >
          <TaskItem
              v-for="(task, index) in getFullTasksList"
              :key="index"
              :task="task"
          ></TaskItem>
        </div>
        <h1
            v-else
            class="main-block__title"
        >
          Your to-do list is empty!
        </h1>
        <button class="main-block__add-new-task" @click="switchCreateTaskModal">
          <i class="material-icons">add_task</i>
        </button>
      </div>

      <Modal v-if="isOpenCreateTask" @closeModal="switchCreateTaskModal">
        <template v-slot:header>
          <span class="title">Create task</span>
          <button class="close-modal" @click="switchCreateTaskModal"><i class="material-icons">close</i></button>
        </template>
        <template v-slot:body>
          <div class="task-content">
            <input placeholder="Task title" v-model="taskTitle">
            <input
                class="choose-date"
                placeholder="Task due"
                onfocus="(this.type = 'datetime-local')"
                onblur="(this.type = 'text')"
                v-model="getFormatDate"
                @change="changeDate"
            >
            <textarea placeholder="Task description" rows="5" v-model="taskDescription"></textarea>
          </div>
        </template>
        <template v-slot:footer>
          <button class="btn-danger" @click="switchCreateTaskModal">Cancel</button>
          <button class="btn-success" @click="createTask">Save</button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaskItem from "./TaskItem.vue";
import Modal from "../../components/modal.vue";

export default {
  data: () => ({
    isOpenCreateTask: false,
    taskTitle: '',
    taskDate: '',
    taskDescription: '',
  }),
  name: "home",
  components: {
    TaskItem,
    Modal,
  },
  mounted() {
    this.fetchFullTasksList();
  },
  computed: {
    ...mapGetters(
        [
          'getFullTasksList',
        ]
    ),
    switchCreateTaskModal() {
      return () => {
        this.isOpenCreateTask = !this.isOpenCreateTask;
      }
    },
    getFormatDate() {
      if (this.taskDate) {
        return `${new Date(this.taskDate).toLocaleDateString()} ${new Date(this.taskDate).toLocaleTimeString()}`;
      }

      return '';
    },
  },
  methods: {
    ...mapActions(
        [
          'fetchFullTasksList',
          'addTask',
        ]
    ),
    createTask() {
      const payload = {
        id: this.getFullTasksList.length + 1,
        title: this.taskTitle,
        description: this.taskDescription,
        due: this.taskDate,
        status: 'common'
      };

      this.addTask(payload);
      this.switchCreateTaskModal();
    },
    changeDate(event) {
      this.taskDate = event.currentTarget.value;
    },
  },
}
</script>

<style lang="scss" scoped>
.main-block {
 .main-block__container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   .main-block__task-container {
     width: 100%;

     .main-block__tasks-list {
       max-height: calc(100vh - 230px);
       overflow-y: auto;
       border-radius: 15px;
       margin: 5px 0;
     }
   }

   .main-block__title {
     cursor: default;
     background: var(--color-for-other-background);
     padding: 20px;
     border-radius: 15px;
     font-size: calc(1.5em + 1vw);
     color: var(--color-for-title);
   }

   .main-block__add-new-task {
     border-radius: 15px;
     width: 100%;
     min-height: 50px;
     max-height: 50px;
     cursor: pointer;
     z-index: 50;
     background: blue;
     border: none;
     display: flex;
     justify-content: center;
     align-items: center;

     &:hover {
       background: rgba(0, 0, 255, 0.5);
       border-radius: 15px;
     }

     i {
       font-size: calc(2em + 1vw);
       color: white;
       padding: 0;
     }
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