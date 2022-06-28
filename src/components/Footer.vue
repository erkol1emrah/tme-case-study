<template>
	<div class="footer">
		<div class="car">
			<NewTag />
			<CarPhoto />
		</div>
		<Separator />
		<TotalPrice />
		<Button />
	</div>
</template>

<script>
import NewTag from './footer/NewTag.vue';
import CarPhoto from './footer/CarPhoto.vue';
import Separator from './footer/Separator.vue';
import TotalPrice from './footer/TotalPrice.vue';
import Button from './footer/Button.vue';

export default {
	name: 'Footer',
	components: {
		NewTag,
		CarPhoto,
		Separator,
		TotalPrice,
		Button,
	},
};
</script>

<style scoped>
.footer {
	width: 939px;
	height: 95px;
	align-items: center;
	background-color: var(--white);
	border-radius: 11px;
	box-shadow: 0px 2px 70px rgba(0, 0, 0, 0.0703671);
	margin-top: 20px;
	margin-bottom: 71px;
}

.car {
	flex-flow: column nowrap;
	align-items: center;
	width: 166px;
	height: 100%;
}
</style>
