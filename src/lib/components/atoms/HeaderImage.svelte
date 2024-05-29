<script lang="ts">
	let rotation = 0;

	function handleMouseMove(event: MouseEvent) {
		const target = event.currentTarget as HTMLDivElement;
		const rect = target.getBoundingClientRect();
		const x = event.clientX - rect.left - rect.width / 2;
		rotation = (x / (rect.width / 2)) * 5;
	}

	function handleMouseLeave() {
		rotation = 0;
	}
</script>

<div
	class="image-hover h-40 w-40 lg:h-64 lg:w-64"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	role="none"
>
	<img
		src="/cv_img.png"
		alt="My face"
		class="rounded-full hover:scale-110 hover:opacity-100 hover:contrast-100 hover:grayscale-0 lg:opacity-50 lg:contrast-125 lg:grayscale"
		style="transform: rotate({rotation}deg); transition: transform 0.2s linear;"
	/>
</div>
