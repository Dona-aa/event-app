<script>
    let {data} = $props();
    console.log(data.categories);
</script>


<h1>New Event</h1>

<form method="POST" action="?/create">
    
    <div>
        <label for="name">Event Name</label>
        <input type="text" id="name" name="name" required>
    </div>

    <div>
        <label for="description">Event Description</label>
        <textarea name="description" id="description"></textarea>
    </div>

    <div>
        <label for="startdate">Startdate</label>
        <input type="date" id="startdate" name="startdate">
    </div>

     <div>
        <label for="starttime">Starttime</label>
        <input type="time" id="starttime" name="starttime">
    </div>

    <div>
        <label for="category">Select a category</label>
        <select name="category" id="category">
            {#each data.categories as category}
                <option value={category.id}>
                    {category.name}
                </option>
            {/each}
    </div>


    <div>
        <button type="submit">Create Event</button>
    </div>
    
    

</form>