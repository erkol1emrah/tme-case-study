<template>
	<div class="new-tag" v-if="store.car !== null">NEW</div>
</template>

<script>
import { store } from '../../store';

export default {
	name: 'NewTag',
	data() {
		return {
			store,
		};
	},
};
</script>

<style>
.new-tag {
	width: 64px;
	height: 25px;
	color: var(--white);
	background-color: var(--black);
	font-family: 'Qanelas Extra Bold';
	font-size: 9px;
	line-height: 12px;
	letter-spacing: 7px;
	align-items: center;
	justify-content: center;
	border-radius: 12.5px;
	padding-left: 7px;
	margin-top: -12.5px;
	user-select: none;
}
</style>
