<template>
<div>
404
</div>
</template>
<script>
export default{
  layout: 'error',
  data() {
    return {
      error: null,
    }
  },
  created() {
    this.error = this.$route.params.error
  },
}
</script>