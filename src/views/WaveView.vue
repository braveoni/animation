<template>
	<canvas id="wave"></canvas>
</template>
<script>
export default {
	name: "WaveView",
	data() {
		return {
			canvas: null,
			ctx: null,
			waves: [],
		}
	},
	methods: {
		draw() { },
		initCanvas() {
			this.canvas = document.querySelector("canvas");
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.ctx = this.canvas.getContext("2d");
		},
		handleResize() {
			window.addEventListener("resize", () => {
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
			});
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.ctx.clearRect(0, 0, this.canvas.widht, this.canvas.height);
		}
	},
	mounted() {
		this.initCanvas();
		this.handleResize();
	}
}
</script>
<style lang="scss" scoped>
canvas#wave {
	background-color: black;
}
</style>