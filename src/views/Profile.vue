<template>
  <div class="main__main-block main-block">
    <div class="main-block__container _container">
      <div class="main-block__profile-avatar">
        <label class="uploadImgLabel">
          <input
              accept="image/*"
              class="uploadImgBtn"
              name="file"
              type="file"
              @change="chooseImg"
          />
          <img class="profile-avatar__avatar" :src="avatarSrc" />
        </label>
      </div>
      <div class="main-block__profile-data">
        <label>
          <span>Full name</span>
          <input type="text" placeholder="Full name" class="full-name" :value="getProfile.full_name" />
        </label>
        <label>
          <span>Gender</span>
          <select class="gender-type">
            <option value="none" selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Email" class="email" :value="getProfile.email" />
        </label>
        <label>
          <span>Password</span>
          <div class="password-container">
            <input type="password" placeholder="Password" class="password" :value="getProfile.password" />
            <i class="material-icons" @click.prevent="switchShowPassword" v-if="!showPassword">visibility</i>
            <i class="material-icons" @click.prevent="switchShowPassword" v-else>visibility_off</i>
          </div>
        </label>
        <label>
          <span>Company</span>
          <input type="text" placeholder="Company" class="company" :value="getProfile.company" />
        </label>
        <button
            class="save-btn"
            @click.prevent="saveChanges"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data: () => ({
    showPassword: false,
    avatarSrc: '',
  }),
  name: "profile",
  mounted() {
    this.fetchProfile();
    this.setData();
  },
  computed: {
    ...mapGetters(
        [
          'getProfile',
        ]
    ),
    setData() {
      return () => {
        this.$el.querySelector('.gender-type').value = this.getProfile.gender;
        this.avatarSrc = this.getProfile.avatar;
      }
    },
  },
  methods: {
    ...mapActions(
        [
          'fetchProfile',
          'changeProfile',
        ]
    ),
    saveChanges() {
      const payload = {
        avatar: this.avatarSrc,
        full_name: this.$el.querySelector('.full-name').value,
        gender: this.$el.querySelector('.gender-type').value,
        email: this.$el.querySelector('.email').value,
        password: this.$el.querySelector('.password').value,
        company: this.$el.querySelector('.company').value,
      };

      this.changeProfile(payload);
    },
    switchShowPassword() {
      this.showPassword = !this.showPassword;

      if (this.showPassword) {
        this.$el.querySelector('.password-container input').type = 'text';
      } else {
        this.$el.querySelector('.password-container input').type = 'password';
      }
    },
    chooseImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (imgEvent) => {
        this.avatarSrc = imgEvent.target.result;
      };

      reader.readAsDataURL(file);
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

    .main-block__profile-avatar {
      width: 200px;
      margin-right: 30px;

      .uploadImgLabel {
        position: relative;
        cursor: pointer;

        .uploadImgBtn {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
      }

      .profile-avatar__avatar {
        max-width: 200px;
        width: 200px;
        max-height: 200px;
        height: 200px;
        border-radius: 50%;
        background: white;
        margin-bottom: 15px;
      }
    }

    .main-block__profile-data {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 350px;

      label {
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        span {
          display: flex;
          padding-left: 5px;
          color: var(--color-for-title);
          font-size: 22px;
          margin: 5px;
        }

        input,
        select {
          width: 100%;
          height: 45px;
          max-height: 45px;
          border-radius: 15px;
          border: 1px solid var(--color-for-border);
          padding: 0;
          text-align: center;
        }

        .password-container {
          width: 100%;
          height: 45px;
          max-height: 45px;
          border-radius: 15px;
          border: 1px solid var(--color-for-border);
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          position: relative;

          input {
            border: none;
          }

          i {
            position: absolute;
            right: 0;
            margin: 5px;
            cursor: pointer;
          }
        }

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: '';
        }
      }

      .save-btn {
        width: 100%;
        height: 45px;
        border-radius: 15px;
        border: 1px solid var(--color-for-border);
        cursor: pointer;
        background: blue;
        color: white;
        font-size: 22px;
        margin-top: 15px;

        &:hover {
          background: rgba(0, 0, 255, 0.5);
        }
      }
    }
  }
}

@media (max-width: 680px) {
  .main-block {
    .main-block__container {
      flex-direction: column;

      .main-block__profile-data {
        margin-bottom: 15px;
      }
    }
  }
}
</style>