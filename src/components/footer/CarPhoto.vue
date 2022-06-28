<template>
	<img class="photo" :src="`/images/${store.image}`" v-if="store.car !== null" />
</template>

<script>
import { store } from '../../store';
import cars from '../../data/cars';

export default {
	name: 'CarPhoto',
	data() {
		return {
			store,
			cars: cars,
		};
	},
};
</script>

<style scoped>
.photo {
	width: 110px;
	height: 50px;
	margin-top: 10px;
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}
</style>
