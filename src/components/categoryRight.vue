<template>
    <div>
      right
    </div>
</template>

<script>

export default {
    data() {
        return {
           rightDatas:[]
        }
    },
		mounted() {
			console.log("挂载一次")
			if(this.$route.params.id){
				this.getDatas(this.$route.params.id);
		  }
		
		},
		updated() {
			console.log("更新中")
				if(this.$route.params.id){
				this.getDatas(this.$route.params.id);
		  }
		},
		destroyed() {
			console.log("销毁一次")
		},
   methods:{
		 getDatas(id){
			 this.$http.get('/categorygoods',{
				 params:{mId:id}
			 }).then((res)=>{
					if(res.status==200){
						this.rightDatas=res.data;
						for(let i=0;i<this.rightDatas.length;i++){
							this.$set(this.rightDatas[i],'flag',false)
						}
						console.log(this.rightDatas);
         	}
     		},(err)=>{
                console.log(err);
        }
			)
		 }
	 }
}
</script>