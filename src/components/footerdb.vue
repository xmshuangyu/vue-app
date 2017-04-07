<template>
	<div class="footer">
		<p >{{msg}}</p>
	</div>
</template>
<script >
	export default{
		data() {
			return {
				msg: '版权所有  粤ICP备13035223号-3',
				barCount: 0
			}
		}
		
		
	}
</script>
<style scoped>
.footer p{ padding: 10px 0; text-align: center; font-size: 14px; }
</style>