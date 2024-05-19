<script lang="ts">
	let rotation = 0;

	function handleMouseMove(event: MouseEvent) {
		const target = event.currentTarget as HTMLDivElement;
		const rect = target.getBoundingClientRect();
		const x = event.clientX - rect.left - rect.width / 2;
		rotation = (x / (rect.width / 2)) * 5;
	}

	function handleMouseLeave(event: MouseEvent) {
		rotation = 0;
	}
</script>

<div
	class="w-64 h-64 image-hover"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	role="none"
>
	<img
		src="/cv_img.png"
		alt="My face"
		class="rounded-full opacity-50 contrast-125 grayscale hover:scale-110 hover:opacity-100 hover:contrast-100 hover:grayscale-0"
		style="transform: rotate({rotation}deg); transition: transform 0.2s linear;"
	/>
</div>
