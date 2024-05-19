<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';

	$: page;
</script>

<!-- <form method="POST" class="flex flex-col items-center justify-center h-screen overflow-y-hidden">
	<label for="PinCode" class="text-3xl font-semibold font-rubik">Pincode:</label>
	<div class="mt-5 join">
		<input class="input join-item input-bordered" name="PinCode" type="password" />
		<button class="btn btn-primary join-item">Log in</button>
	</div>
	{#if $page.form?.error}
		<p class="mt-2 font-semibold text-red-500">Onjuiste pincode</p>
	{/if}
</form> -->

<form method="POST" class="flex items-center justify-center h-screen" use:enhance>
	<Card.Root>
		<Card.Header>
			<Card.Title>Login - Ben's Curriculum Vitae</Card.Title>
			<Card.Description>Please enter the login code to access my curriculum vitae.</Card.Description
			>
		</Card.Header>
		<Card.Content class="grid items-center grid-cols-3 gap-4">
			<Input type="password" placeholder="code" class="col-span-2" name="PinCode" />
			<Button type="submit" class="">Login</Button>
		</Card.Content>
		<Card.Footer>
			{#if $page.form?.error}
				<p class="text-destructive">Incorrect code provided</p>
			{/if}
		</Card.Footer>
	</Card.Root>
</form>
