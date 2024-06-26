<script lang="ts">
	import * as m from '$paraglide/messages';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Separator } from '$lib/components/ui/separator';
	import type { PersonalDetails } from '$lib/types/data.interface';
	import { Copy, Ellipsis, Save, Send } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import links from '$lib/data/links';

	export let details: PersonalDetails;

	function copyEmail(mail: string) {
		navigator.clipboard
			.writeText(mail)
			.then(function () {
				toast.success('Email copied to clipboard.');
			})
			.catch(function (err) {
				toast.error('Could not copy email.');
				console.error('Could not copy text: ', err);
			});
	}

	function copyPhone(phone: string) {
		navigator.clipboard
			.writeText(phone)
			.then(function () {
				toast.success('Phone number copied to clipboard.');
			})
			.catch(function (err) {
				toast.error('Could not copy phone number.');
				console.error('Could not copy text: ', err);
			});
	}

	function saveContact() {
		try {
			let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8: ${details.firstName} ${details.lastName}\nN;CHARSET=UTF-8:${details.lastName};${details.firstName};;;\nEMAIL;CHARSET=UTF-8;type=HOME,INTERNET:${details.email}\nEMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${details.schoolMail}\nTEL;TYPE=CELL:${details.phone}\nADR;CHARSET=UTF-8;TYPE=HOME:;;${details.address};${details.city};;${details.zip};${details.country}\nURL;TYPE=linkedin:${links.find((x) => x.name === 'LinkedIn')}\nBDAY:${details.birthday}\nEND:VCARD`;
			let blob = new Blob([vcard], { type: 'text/vcard' });
			let url = URL.createObjectURL(blob);
			let link = document.createElement('a');
			link.href = url;
			link.download = `${details.firstName} ${details.lastName}.vcf`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			toast.success('Contact saved to your device.');
		} catch (e) {
			toast.error('Could not save contact.');
			console.error('Could not save contact: ', e);
		}
	}

	let age = 0;
	onMount(() => {
		if (details.birthday) {
			const birthday = new Date(details.birthday);
			const today = new Date();
			age = today.getFullYear() - birthday.getFullYear();
			const m = today.getMonth() - birthday.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
				age--;
			}
		}
	});
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="secondary">{m.sheet_button()}</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-y-auto">
		<Sheet.Header>
			<Sheet.Title>{m.details_title()}</Sheet.Title>
			<Sheet.Description>{m.details_desc()}</Sheet.Description>
		</Sheet.Header>
		<div class="grid gap-4 py-4">
			<!-- Name -->
			<div class="flex gap-4">
				<div>
					<Label for="firstName" class="text-right">{m.details_firstName()}</Label>
					<Input id="firstName" value={details.firstName} class="col-span-3" disabled />
				</div>
				<div>
					<Label for="lastName" class="text-right">{m.details_lastName()}</Label>
					<Input id="lastName" value={details.lastName} class="col-span-3" disabled />
				</div>
			</div>

			<div class="flex gap-4">
				<div>
					<Label for="birthday" class="text-right">{m.details_birth()}</Label>
					<Input id="birthday" value={details.birthday} class="col-span-3" disabled />
				</div>
				<div>
					<Label for="age" class="text-right">{m.details_age()}</Label>
					<Input id="age" value={age} class="col-span-3" disabled />
				</div>
			</div>

			<Separator />

			<!-- Address -->
			<div class="flex gap-4">
				<div>
					<Label for="Address" class="text-right">{m.details_address()}</Label>
					<Input id="Address" value={details.address} class="col-span-3" disabled />
				</div>
				<div>
					<Label for="zip" class="text-right">{m.details_zip()}</Label>
					<Input id="zip" value={details.zip} class="col-span-3" disabled />
				</div>
			</div>

			<div class="flex gap-4">
				<div>
					<Label for="city" class="text-right">{m.details_city()}</Label>
					<Input id="city" value={details.city} class="col-span-3" disabled />
				</div>
				<div>
					<Label for="country" class="text-right">{m.details_country()}</Label>
					<Input id="country" value={details.country} class="col-span-3" disabled />
				</div>
			</div>

			<Separator />

			<div>
				<Label for="schoolMail" class="text-right">{m.details_schoolEmail()}</Label>
				<div class="flex items-center gap-2">
					<Input id="email" value={details.schoolMail} class="col-span-3" disabled />
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Button variant="secondary">
								<Ellipsis class="h-4 w-4" />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item
								class="cursor-pointer"
								on:click={() => copyEmail(details.schoolMail)}
							>
								<Copy class="mr-2 h-4 w-4" />
								<span>{m.details_copyEmail()}</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="cursor-pointer" href="mailto:{details.schoolMail}">
								<Send class="mr-2 h-4 w-4" />
								<span>{m.details_sendEmail()}</span>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
			<div>
				<Label for="email" class="text-right">{m.details_privateEmail()}</Label>
				<div class="flex items-center gap-2">
					<Input id="email" value={details.email} class="col-span-3" disabled />
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Button variant="secondary">
								<Ellipsis class="h-4 w-4" />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item class="cursor-pointer" on:click={() => copyEmail(details.email)}>
								<Copy class="mr-2 h-4 w-4" />
								<span>{m.details_copyEmail()}</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="cursor-pointer" href="mailto:{details.email}">
								<Send class="mr-2 h-4 w-4" />
								<span>{m.details_sendEmail()}</span>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
			<div>
				<Label for="phone" class="text-right">{m.details_phone()}</Label>
				<div class="flex items-center gap-2">
					<Input id="phone" value={details.phone} class="col-span-3" disabled />
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Button variant="secondary">
								<Ellipsis class="h-4 w-4" />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item class="cursor-pointer" on:click={() => copyPhone(details.phone)}>
								<Copy class="mr-2 h-4 w-4" />
								<span>{m.details_copyPhone()}</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="cursor-pointer" on:click={saveContact}>
								<Save class="mr-2 h-4 w-4" />
								<span>{m.details_saveContact()}</span>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
		</div></Sheet.Content
	>
</Sheet.Root>
