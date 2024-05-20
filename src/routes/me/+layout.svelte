<script>
	import Navbar from '$lib/components/elements/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<div>
	<Toaster richColors />
	<Navbar />
	<slot />
</div>
