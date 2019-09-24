<template>
<div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formdata.password" type="password"></el-input>
        </el-form-item>
        <el-button @click.prevent="handleLogin" class="login-btn" type="primary">登录</el-button>
    </el-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            formdata: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        // 登录请求
        handleLogin() {
            this.$http.post('login', this.formdata).then(res => {
                // console.log(res)
                //登录成功 1.跳转到home 2.提示成功
                //登录失败 1.提示消息
                const {
                    data,
                    meta: {
                        msg,
                        status
                    }
                } = res.data

                if (status == 200) {
                    this.$router.push({
                        name: 'home'
                    })
                    this.$message.success(msg)
                } else {
                    this.$message.error(msg)

                }
            })
        }
    }
}
</script>

<style>
.login-wrap {
    height: 100%;
    background-color: #324152;
    display: flex;
    /* 内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。 */
    justify-content: center;
    /* align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。*/
    align-items: center;
}

.login-wrap .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
}

.login-wrap .login-btn {
    width: 100%;
    margin-top: 30px;
}
</style>
