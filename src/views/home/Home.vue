<template>
  <div class="main__main-block main-block">
    <div class="main-block__container _container">
      <div class="main-block__task-container">
        <TaskItem
            v-for="(task, index) in getFullTasksList"
            v-show="getFullTasksList.length"
            :key="index"
            :task="task"
        ></TaskItem>
        <h1
            v-show="!getFullTasksList.length"
            class="main-block__title"
        >
          Your to-do list is empty!
        </h1>
        <button class="main-block__add-new-task">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaskItem from "./TaskItem.vue";

export default {
  name: "home",
  components: {
    TaskItem
  },
  mounted() {
    this.fetchFullTasksList();
  },
  computed: {
    ...mapGetters(
        [
          'getFullTasksList'
        ]
    ),
  },
  methods: {
    ...mapActions(
        [
          'fetchFullTasksList'
        ]
    ),
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

     i {
       font-size: calc(2em + 1vw);
       color: white;
       padding: 0;
     }
   }
 }
}
</style>