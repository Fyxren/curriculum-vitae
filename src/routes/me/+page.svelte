<script lang="ts">
	import type { PageData } from './$types';
	import DetailsSheet from '$lib/components/atoms/DetailsSheet.svelte';
	import Education from '$lib/components/elements/Education.svelte';
	import Experience from '$lib/components/elements/Experience.svelte';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import Hobbies from '$lib/components/elements/Hobbies.svelte';
	import Projects from '$lib/components/elements/Projects.svelte';
	import Skills from '$lib/components/elements/Skills.svelte';
	import Certificates from '$lib/components/elements/Certificates.svelte';

	export let data: PageData;
</script>

<div>
	<div class="mb-8 space-y-8">
		<Header />
		<Education />
		<Experience />
		<Certificates />
		<Skills />
		<Projects />
		<Hobbies />
		<Footer />
	</div>
	<div class="fixed bottom-0 right-0 p-4">
		<DetailsSheet details={data} />
	</div>
</div>
