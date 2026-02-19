<script>
    let {data} = $props();
   
</script>


<h1>Edit Event</h1>

<form action="?/edit" method="POST">
    <div>
        <label for="name">Event Name</label>
        <input type="text" id="name" name="name" required value={data.event.name}>
    </div>

    <div>
        <label for="description">Event Description</label>
        <textarea name="description" id="description" value={data.event.description}></textarea>
    </div>

    <div>
        <label for="startdate">Startdate</label>
        <input type="date" id="startdate" name="startdate" value={data.event.startdate.toISOString().substring(0,10)}>
    </div>

     <div>
        <label for="starttime">Starttime</label>
        <input type="time" id="starttime" name="starttime" value={data.event.starttime}>
    </div>

    <div>
        <button type="submit">Update Event</button>
    </div>
    

</form>