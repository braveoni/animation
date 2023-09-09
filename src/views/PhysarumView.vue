<template>
	<canvas id="physarum"></canvas>
</template>
<script lang="ts">
import { Canvas } from "@/types/abs/canvas";

export default {
	name: "PhysarumView",
	data(): {
		canvas: Canvas | null,
	} {
		return {
			canvas: null,
		}
	},
	mounted() {
		const canvas: HTMLCanvasElement | null = document.querySelector("#physarum");
		if (canvas) {
			this.canvas = new Canvas(canvas, window.innerWidth, window.innerHeight);
		}

		window.addEventListener('resize', () => this.canvas?.updateSize());
	}
}
</script>
<style lang="scss"></style>