<template>
	<div class="separator" v-if="store.car !== null"></div>
</template>

<script>
import { store } from '../../store';

export default {
	name: 'Separator',
	data() {
		return {
			store,
		};
	},
};
</script>

<style>
.separator {
	width: 1px;
	height: 51px;
	background-color: var(--dark-gray);
	opacity: 0.18;
}
</style>
