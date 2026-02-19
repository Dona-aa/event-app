<script>
    let {data} = $props();
</script>

<h1>Events in Shkodra</h1>
<h2>{data.pageTitel}</h2>

<main>
    {#each data.events as event}
        <a href={"/events/" + event.id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>

        </a>
    {/each}
</main>