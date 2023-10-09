<script>
	import DizzyBg from '../../components/dizzyBg.svelte';
	import logoCatchLess from '../../lib/images/logoCatchLess.png';
	import Event from '../../components/event/event.svelte';

	export let data;
	console.log();
	const events=data.body.data;
</script>

<svelte:head>
	<title>The Temple ⭐ Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div>{data.body.data[0].attributes.EventTitle}</div>
<Event bgcolor={"emerald"} color={"yellow"} colorValue={700} bgcolorValue={900} ></Event>
<Event ></Event>





