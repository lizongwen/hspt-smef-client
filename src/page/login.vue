<template lang="html">
  <div class="login-page" @keyup.enter="login">
    <div class="login-form">
	<div class="title">云信平台</div>
      <div class="input-group">
        <el-input
          :autofocus="true"
          placeholder="请输入用户名"
          icon="time"
          v-model="username">
        </el-input>
      </div>
      <div class="input-group">
        <el-input
          placeholder="请输入密码"
          type="password"
          icon="time"
          v-model="password">
        </el-input>
      </div>
      <div class="input-group">
        <el-button @click.native="login" type="primary" :loading="isBtnLoading">{{btnText}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isBtnLoading: false
    };
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  mounted() {
    this.username = sessionStorage.getItem("username") || "";
  },
  methods: {
    checkInput() {
      if (!this.username) {
        this.$message.error("请填写用户名！！！");
        return;
      }
      if (!this.password) {
        this.$message.error("请填写密码");
        return;
      }
    },
    login: async function() {
      let params = { username: this.username, password: this.password };
      this.isBtnLoading = true;
      const res = await this.$http.post(this.$api.login, params);
      sessionStorage.setItem("username", params.username);
      sessionStorage.setItem("token", res.data.resultData.token);
      this.$router.push({ path: "./index" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efeeee;
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 350px;
    border-radius: 10px;
    background: white;
    border: 1px #eaeaea solid;
    box-shadow: 0px 0px 25px #cac6c6;
    .title {
      color: #20a0ff;
      font-weight: bold;
      font-size: 40px;
      text-align: center;
      line-height: 2.2;
      font-family: sans-serif;
    }
    .input-group {
      margin-bottom: 30px;
      width: 80%;
      &:last-child {
        margin-top: 0;
      }
      button {
        width: 100%;
      }
    }
  }
}
</style>
