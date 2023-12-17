<script>
	import EventTeaser from '../../components/event/eventTeaser.svelte';
	//<Event bgcolor={"emerald"} color={"yellow"} colorValue={700} bgcolorValue={900} ></Event>
	
	export let data;
	console.log(data);
	const events =data.body.data;
</script>

<svelte:head>
	<title>The Temple ⭐ Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>




{#each events as datumEvent}
<EventTeaser eventData={datumEvent.attributes} ></EventTeaser>
{/each}

