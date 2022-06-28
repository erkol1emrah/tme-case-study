<template>
	<div class="menu">
		<RouterLink to="/" v-slot="{ navigate, href, isActive }" custom>
			<div class="item" :class="{ active: isActive }">
				<a :href="href" @click="navigate">MODELS</a>
				<div :class="{ underline: isActive }"></div>
			</div>
		</RouterLink>
		<RouterLink to="/select-color" v-slot="{ navigate, href, isActive }" custom>
			<div class="item" :class="{ active: isActive }">
				<a :href="href" @click="navigate">COLORS</a>
				<div :class="{ underline: isActive }"></div>
			</div>
		</RouterLink>
		<RouterLink to="/select-packs" v-slot="{ navigate, href, isActive }" custom>
			<div class="item" :class="{ active: isActive }">
				<a :href="href" @click="navigate">ACCESSORIES</a>
				<div :class="{ underline: isActive }"></div>
			</div>
		</RouterLink>
		<RouterLink to="/summary" v-slot="{ navigate, href, isActive }" custom>
			<div class="item" :class="{ active: isActive }">
				<a :href="href" @click="navigate">SUMMARY</a>
				<div :class="{ underline: isActive }"></div>
			</div>
		</RouterLink>
	</div>
</template>

<script>
export default {
	name: 'Menu',
};
</script>

<style>
.menu {
	font-family: 'Qanelas Bold';
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 1px;
	text-align: center;
	margin-top: 55px;
}

.item {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	color: var(--black);
	margin-right: 57.5px;
	opacity: 0.19;
	user-select: none;
}

.item:last-child {
	margin-right: 0;
}

.item:hover {
	opacity: 1;
}

.underline {
	width: 14px;
	min-width: 14px;
	max-width: 14px;
	height: 4px;
	min-height: 4px;
	max-height: 4px;
	background-color: var(--black);
	margin-top: 12px;
}

.active {
	opacity: 1;
}
</style>
