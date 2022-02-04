<script>
    let rowAmt = Math.floor(Math.random() * (10 - 3 + 1) + 3);
</script>

<div class="wrapper">
    <div class="flex items-center mb-xs def">
        <div class="avatar" />
        <div class="username" />
    </div>
    <div class="title" />
    {#each Array(rowAmt).fill() as row}
        <div class="row" />
    {/each}
</div>

<style>
    div:not(.wrapper):not(.def) {
        @apply bg-subtle rounded;
    }
    .wrapper {
        @apply bg-default;
    }
    .avatar {
        @apply w-lg h-lg rounded-full mr-sm;
    }
    .username {
        @apply h-md w-160 flex-none;
    }
    .title {
        @apply h-lg mb-md w-300;
    }
    .row {
        @apply h-md mb-xs;
    }
</style>