<template>
	<div class="car-selection">
		<Car :id="0" />
		<Car :id="1" />
	</div>
</template>

<script>
import Car from './car-selection/Car.vue';

export default {
	name: 'CarSelectionView',
	components: {
		Car,
	},
};
</script>

<style>
.car-selection {
	height: 604px;
	align-items: center;
	justify-content: center;
}
</style>
