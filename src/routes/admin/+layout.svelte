<script>
    let {children} =$props();
</script>

<header>
   <h1>Admin Dashboard</h1> 
</header>


{@render children()}

<style>
    header{
        background-color: lightgreen;
    }
</style>