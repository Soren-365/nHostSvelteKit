<script>
	import { onMount } from 'svelte';

	let menu;
	let isOpen = false;

	onMount(async () => {
		await import('@nordhealth/components');

		menu.commands = [
			{
				id: 'consultation',
				title: 'Start consultation',
				keywords: 'command new create',
				shortcut: 'Alt+KeyC',
				section: 'Commands',
				handler: () => {
					alert('Start consultation');
				}
			},
			{
				id: 'patient',
				title: 'New patient',
				keywords: 'command new create',
				shortcut: 'Alt+KeyP',
				icon: 'interface-add',
				section: 'Commands',
				handler: () => {
					alert('New patient');
				}
			},
			{
				id: 'appointment',
				title: 'New appointment',
				keywords: 'command new create',
				shortcut: 'Alt+KeyA',
				icon: 'interface-add',
				section: 'Commands',
				handler: () => {
					alert('New appointment');
				}
			},
			{
				id: 'invoice',
				title: 'New invoice',
				keywords: 'command new create',
				shortcut: 'Alt+KeyI',
				icon: 'interface-add',
				section: 'Commands',
				handler: () => {
					alert('New invoice');
				}
			},
			{
				id: 'user',
				title: 'Switch user',
				keywords: 'command change log sign out in',
				shortcut: 'Alt+KeyU',
				icon: 'user-multiple',
				section: 'Commands',
				handler: () => {
					alert('Switch user');
				}
			},
			{
				id: 'theme',
				keywords: 'dark light mode ui',
				title: 'Change theme...',
				icon: 'file-picture',
				shortcut: 'Alt+KeyT',
				section: 'Commands'
			},
			{
				id: 'Light Theme',
				keywords: 'mode ui',
				title: 'Change theme to Light',
				icon: 'interface-mode-light',
				parent: 'theme',
				handler: () => {
					alert('Change to light theme');
				}
			},
			{
				id: 'Dark Theme',
				keywords: 'mode ui',
				title: 'Change theme to Dark',
				icon: 'interface-mode-dark',
				parent: 'theme',
				handler: () => {
					alert('Change to dark theme');
				}
			},
			{
				id: 'dashboard',
				keywords: 'sections view go to visit',
				title: 'Open dashboard',
				shortcut: 'Alt+Digit1',
				section: 'Sections',
				handler: () => {
					alert('Open dashboard');
				}
			},
			{
				id: 'payments',
				keywords: 'sections view go to visit',
				title: 'Open payments',
				shortcut: 'Alt+Digit2',
				section: 'Sections',
				handler: () => {
					alert('View payments');
				}
			},
			{
				id: 'reports',
				keywords: 'sections view go to visit',
				title: 'Open reports',
				shortcut: 'Alt+Digit3',
				section: 'Sections',
				handler: () => {
					alert('Open reports');
				}
			},
			{
				id: 'settings',
				keywords: 'sections view go to visit',
				title: 'Open settings',
				shortcut: 'Alt+Digit4',
				section: 'Sections',
				handler: () => {
					alert('Open settings');
				}
			}
		];
	});

	function handleClick() {
	menu.toggleOpen()
	// isOpen = !isOpen
	}
</script>

<nord-command-menu bind:this={menu} on:open={() => {isOpen=true}} on:close={() => {isOpen=false}} />

<nord-button variant="primary" on:click={() => handleClick()} >Actions</nord-button>
