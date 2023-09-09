<template>
	<canvas id="circular"></canvas>
</template>
<script>
class Particle {

	COLORS = [
		"#FF7477",
		"#E69597",
		"#E69597",
		"#255C99",
		"#E75A7C"
	]

	constructor(x, y, radius, color) {
		[this.x, this.y, this.radius, this.color] = [x, y, radius, this.randomColor()];
		this.radians = Math.random() * Math.PI * 2;
		this.distance = this.randomDistance(2, 4);
		this.prevMouse = { x: x, y: y };
		this.velocity = Math.random() / 100;
	}

	update(ctx) {
		this.prev = { x: this.x, y: this.y };
		this.radians += this.velocity;
		this.x += Math.cos(this.radians) * this.distance;
		this.y += Math.sin(this.radians) * this.distance;
		this.draw(ctx);
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.radius;
		ctx.lineCap = "round";
		ctx.moveTo(this.prev.x, this.prev.y)
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
		ctx.closePath();
	}

	randomDistance(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	randomColor() {
		return this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
	}
}

export default {
	name: "CircularView",
	data() {
		return {
			canvas: null,
			ctx: null,
			particles: [],
			count: 800,
		}
	},
	methods: {
		init() {
			this.canvas = document.querySelector("canvas");
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;

			this.ctx = this.canvas.getContext("2d");
			this.spawn();
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			// this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.particles.forEach(particle => {
				particle.update(this.ctx);
			});
		},
		handleMouse(event) {
			[this.mouse.layerX, this.mouse.layerY] = [event.layerX, event.layerY];
		},
		spawn() {
			for (let index = 0; index < this.count; index++) {
				this.particles.push(new Particle(this.canvas.width / 2, this.canvas.height / 2, 10, "white"));
				setTimeout(() => {
					particle.update(this.ctx);
				}, 500)
			}
		}
	},
	mounted() {
		this.init();
		this.animate();
	}
}
</script>
<style lang="scss" scoped>
canvas#circular {
	display: block;
	background-color: black;
}
</style>