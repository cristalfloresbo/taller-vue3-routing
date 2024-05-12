<template lang="html">
    <div>
        User {{ $route.params.id }}
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route.params.id);
    },
}
</script>
<style lang="css">
    
</style>