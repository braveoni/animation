<template>
	<canvas id="flowfield"></canvas>
</template>
<script>
const setup = () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.lineWidth = 1;

	class Particle {
		constructor(effect) {
			this.effect = effect;
			this.x = Math.floor(Math.random() * effect.width);
			this.y = Math.floor(Math.random() * effect.height);

			this.speed = { x: 0, y: 0 };
			this.speedModifier = Math.floor(Math.random() * 3 + 1);

			this.positions = [{ x: this.x, y: this.y }];
			this.maxLenght = Math.floor(Math.random() * 300 + 10);
			this.angle = 0;

			this.timer = this.maxLenght * 2;
		}

		draw(context) {
			// context.fillRect(this.x, this.y, 10, 10);
			context.beginPath();
			context.moveTo(this.positions[0].x, this.positions[0].y);

			for (let i = 0; i < this.positions.length; i++) {
				context.lineTo(this.positions[i].x, this.positions[i].y);
			}
			context.shadowBlur = 10;
			context.shadowColor = "white";
			context.stroke();
		}

		update() {
			this.timer--;

			if (this.timer >= 1) {
				let x = Math.floor(this.x / this.effect.cellSize);
				let y = Math.floor(this.y / this.effect.cellSize);
				let index = y * this.effect.cols + x;
				this.angle = this.effect.flowFields[index];

				this.speed = { x: Math.cos(this.angle) * this.speedModifier, y: Math.sin(this.angle) * this.speedModifier };
				this.x += this.speed.x;
				this.y += this.speed.y;
				this.positions.push({ x: this.x, y: this.y });

				if (this.positions.length > this.maxLenght) this.positions.shift();
			} else if (this.positions.length > 1) {
				this.positions.shift();
			} else {
				this.reset();
			}
		}

		reset() {
			this.x = Math.floor(Math.random() * this.effect.width);
			this.y = Math.floor(Math.random() * this.effect.height);
			this.positions = [{ x: this.x, y: this.y }];
			this.timer = this.maxLenght * 2;
		}
	}

	class Effect {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.particles = [];
			this.numberOfParticles = 512;

			this.cellSize = 16;
			this.rows;
			this.cols;
			this.flowFields = [];

			this.curve = 0.67;
			this.zoom = 0.05;

			this.init();
		}

		init() {
			this.cols = Math.floor(this.width / this.cellSize);
			this.rows = Math.floor(this.height / this.cellSize);
			this.flowFields = [];

			for (let y = 0; y < this.rows; y++) {
				for (let x = 0; x < this.cols; x++) {
					let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
					this.flowFields.push(angle);
				}
			}

			for (let i = 0; i < this.numberOfParticles; i++) {
				this.particles.push(new Particle(this));
			}
		}

		drawGrid(context) {
			context.save();
			context.strokeStyle = "red";

			for (let c = 0; c < this.cols; c++) {
				context.beginPath();
				context.moveTo(this.cellSize * c, 0);
				context.lineTo(this.cellSize * c, this.height);
				context.stroke();
			}

			for (let r = 0; r < this.rows; r++) {
				context.beginPath();
				context.moveTo(0, this.cellSize * r);
				context.lineTo(this.width, this.cellSize * r);
				context.stroke();
			}

			context.restore();
		}

		render(context) {
			// this.drawGrid(context);
			this.particles.forEach(particle => {
				particle.draw(context);
				particle.update();
			});
		}
	}

	const effect = new Effect(canvas.width, canvas.height);

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		effect.render(ctx);
		requestAnimationFrame(animate);
	}

	animate();
}


export default {
	name: "FlowField",
	data() {
		return {

		}
	},
	methods: {
	},
	mounted() {
		setup();
	}
}
</script>
<style lang="scss" scoped>
canvas {
	position: absolute;
	background-color: black;
}
</style>