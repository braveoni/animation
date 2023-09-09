<template>
	<main class="page">
		<router-link v-for="(item, index) in pages" :key="index" :to="item.link">
			<ParallaxCard class="card card__particles">
				<h1>{{ item.title }}</h1>
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
		background-color: pink;
	}
}
</style>