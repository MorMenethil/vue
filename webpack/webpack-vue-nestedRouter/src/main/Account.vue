<template>
    <div>
        <h1>这是Account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
/* 普通的标签只支持普通的样式,如果想要启动scss或less,需要为style标签设置 lang 属性 */
// 只要 style 标签, 是在 .vue 组建中定义的,那么推荐都为 style 开启 scoped 属性
    body {
        div {
            font-style: italic
        }
    }
</style>