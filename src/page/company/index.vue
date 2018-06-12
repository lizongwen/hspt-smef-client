<template>
	<div>
		<company-header></company-header>
		<router-view/>
	</div>

</template>

<script>
import companyHeader from "@/components/companyHeader.vue";
export default {
  components: {
    companyHeader
  }
};
</script>
<style lang="scss" scoped>
</style>

