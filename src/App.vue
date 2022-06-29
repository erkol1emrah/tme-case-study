<template>
	<Header />
	<RouterView />
	<Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style>
@import '@/assets/base.css';

#app {
	min-width: 360px;
	max-width: 1440px;
	flex-flow: column nowrap;
	align-items: center;
	margin: auto;
}
</style>
