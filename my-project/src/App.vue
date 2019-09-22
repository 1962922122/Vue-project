<template>
  <div id="app">
    <!-- 顶部导航 -->
    <mt-header fixed title="校园APP"></mt-header>

    <!-- 中间内容 -->
  <transition>
	 <router-view></router-view>
	</transition>

    <!-- 底部导航 -->
   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mall">
				<span class="mui-icon mui-icon-extra mui-icon-extra-hotel"></span>
				<span class="mui-tab-label">商城</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/personal">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人</span>
			</router-link>
		</nav>
  </div>
</template>

<style lang="scss">

#app{
  padding-top: 40px;
	// 消除左右切换滚动条
	overflow-x: hidden;
}
.v-enter{
opacity: 0;
transform:translateX(100%)
}
.v-leave-to{
opacity: 0;
transform:translateX(-100%);
// 解决切换上漂的问题
position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>
