<template>
	<div class="footer">
		<div class="gradient"></div>
		<div class="background">
			<div class="car">
				<NewTag />
				<CarPhoto />
			</div>
			<Separator />
			<TotalPrice />
			<Button />
		</div>
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
	position: relative;
	width: 939px;
	height: 95px;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 71px;
}

@media (max-width: 992px) {
	.footer {
		width: 90%;
	}
}

.gradient {
	position: absolute;
	width: 1114px;
	height: 283px;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.0001) 0%,
		rgba(255, 255, 255, 0.955857) 33.85%,
		#ffffff 100%
	);
	z-index: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.background {
	position: absolute;
	width: 100%;
	height: 95px;
	align-items: center;
	background-color: var(--white);
	border-radius: 11px;
	box-shadow: 0px 2px 70px rgba(0, 0, 0, 0.0703671);
	z-index: 1;
}

.car {
	flex-flow: column nowrap;
	align-items: center;
	width: 166px;
	height: 100%;
}

@media (max-width: 576px) {
	.car {
		width: 35%;
	}
}
</style>
