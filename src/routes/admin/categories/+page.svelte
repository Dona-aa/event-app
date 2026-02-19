<script>
    let {data} = $props();
</script>

<h1>Manage Categories</h1>

<a href="/admin/category/new">
    <button>Add new Category</button>
    
</a>
<main>
    {#each data.categories as category}
        <div class="category">
            <p>{category.name}</p>



            <div>
                <a href="/admin/category/{category.id}/edit">
                    <button>Edit</button>
                </a>
                <form action="?/delete" method="POST">
                <input type="hidden" value={category.id} name="id">
                <button type="submit">Delete</button>
                </form>
            </div>

           
        </div>
    {/each}
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;

    }
    .category{
        border: 1px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
</style>