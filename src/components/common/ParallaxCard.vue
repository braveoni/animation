<template>
	<div class="card" @mousemove="transform" @mouseleave="clear"
		:style="{ 'transform': `perspective(500px) rotateX(${percentX * modifier}deg) rotateY(${percentY * modifier}deg)` }">
		<div class="card__container">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: "ParallaxCard",
	data() {
		return {
			percentX: 0,
			percentY: 0,
			modifier: 10,
		}
	},
	methods: {
		transform(event: MouseEvent) {
			let [mouseX, mouseY] = [event.pageX, event.pageY];

			const centerX = this.$el.offsetLeft + this.$el.offsetWidth / 2;
			const centerY = this.$el.offsetTop + this.$el.offsetHeight / 2;

			this.percentX = (mouseX - centerX) / (this.$el.offsetWidth / 2);
			this.percentY = -((mouseY - centerY) / (this.$el.clientHeight / 2));
		},
		clear() {
			[this.percentX, this.percentY] = [0, 0];
		}
	}
} 
</script>
<style lang="scss" scoped>
.card {
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.3s;
	transform-style: preserve-3d;

	&__container {
		width: 100%;
		height: 100%;
		position: absolute;
		transform-style: preserve-3d;
	}
}
</style>