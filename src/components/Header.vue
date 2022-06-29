<template>
	<div class="header">
		<Bullet />
		<Logo />
		<Menu />
	</div>
</template>

<script>
import Bullet from './header/Bullet.vue';
import Logo from './header/Logo.vue';
import Menu from './header/Menu.vue';

export default {
	name: 'Header',
	components: {
		Bullet,
		Logo,
		Menu,
	},
};
</script>

<style>
.header {
	width: 100%;
	flex-flow: column nowrap;
	align-items: center;
	margin-bottom: 20px;
	z-index: 1;
}
</style>
