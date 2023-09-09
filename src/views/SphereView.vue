<template>
	<canvas id="sphere" ref="canvas"></canvas>
</template>
<script>
export default {
	name: "SphereView",
	data() {
		return {
			size: 5,
			gap: 20,
			mouseGap: 7,
		}
	},
	methods: {
		drawPoint(ctx, x, y, color = "black") {
			ctx.beginPath();
			ctx.fillStyle = color;
			ctx.arc(x, y, this.size, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
		},
		drawPoints(canvas, ctx) {
			for (let index = 0; index < 12; index++) {
				switch (true) {
					case index < 6: {
						this.drawPoint(ctx, (canvas.width - this.size) / 2 - ((5 - index) * this.gap), (canvas.height - this.size) / 2);
						break;
					}
					case index == 6: {
						this.drawPoint(ctx, (canvas.width - this.size) / 2, (canvas.height - this.size) / 2);
						break;
					}
					default:
						this.drawPoint(ctx, (canvas.width - this.size) / 2 + ((index - 6) * this.gap), (canvas.height - this.size) / 2);
				}
			}
		},
		drawLine(ctx, x, y, color = "black") {
			ctx.beginPath();
			ctx.lineTo(x, y);
			ctx.lineWidth = 7;
			ctx.lineCap = "round"
			ctx.strokeStyle = color;
			ctx.stroke();
		},
		drawMousePoint(ctx, x, y) {
			const colors = ["A6FF96", "F8FF95", "BC7AF9", "FFA1F5"];

			colors.forEach((color, idx) => {
				switch (true) {
					case idx == 0: {
						this.drawLine(ctx, x, y + this.mouseGap, `#${color}`)
					}
					case idx == 1: {
						this.drawLine(ctx, x + this.mouseGap, y, `#${color}`)
					}
					case idx == 2: {
						this.drawLine(ctx, x, y - this.mouseGap, `#${color}`)
					}
					case idx == 3: {
						this.drawLine(ctx, x - this.mouseGap, y, `#${color}`)
					}
				}
			});
		},
		mouse(canvas, ctx) {
			canvas.addEventListener("mousemove", event => {
				this.drawLine(ctx, event.layerX, event.layerY);
			});
		}
	},
	mounted() {
		const canvas = this.$refs.canvas;
		const ctx = canvas.getContext("2d");

		[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
		ctx.moveTo(0, 0);
		this.drawLine(ctx, 100, 100)
	}
}
</script>
<style lang="scss"></style>