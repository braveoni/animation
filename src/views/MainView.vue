<template>
	<main class="page">
		<router-link v-for="(item, index) in pages" :key="index" :to="item.link">
			<ParallaxCard class="card card__particles">
				<div class="card__content">
					<h1>{{ item.title }}</h1>
				</div>
			</ParallaxCard>
		</router-link>
	</main>
</template>
<script lang="ts">
import ParallaxCard from '@/components/common/ParallaxCard.vue';

export default {
	name: "MainPage",
	components: { ParallaxCard },
	data() {
		return {
			pages: [
				// { link: "/particles", title: "Particles" },
				// { link: "/physarum", title: "Physarum" },
				// { link: "/sphere", title: "Sphere" },
				// { link: "/waves", title: "Waves" },
				// { link: "/circular", title: "Circular" },
				{ link: "/flowfield", title: "Flow Field" },
			]
		}
	}
}
</script>
<style lang="scss" scoped>
.page {
	padding: 120px;
	display: grid;
	gap: 60px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	width: 100%;
	height: 100%;
}

.card {
	border-radius: 20px;

	&__particles {
		color: aliceblue;
		background-color: black;
	}

	&__content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: translateZ(100px);
	}
}
</style>