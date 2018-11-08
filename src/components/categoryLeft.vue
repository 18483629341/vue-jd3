<template>
	<div id="cate_left">
		 <div class="category_left">
	            <ul class="childbox">
	                <li :class="{active:item.flag}" v-for="(item,i) in leftDatas" @click="change(item,i)">
	                	<router-link :to="'/catgory/'+item.category_id">
	                	{{item.category_name}}
	                	</router-link>
	                </li>
	               
	            </ul>
	        </div>
	</div>
</template>
<script>

export default {
    data() {
        return {
           leftDatas:[]
        }
    },
    mounted() {
			this.getcategdoryLists();
		},
		methods:{
			
			getcategdoryLists(){
				 let _this=this;
				 _this.$http.get('/category').then((res)=>{
					if(res.status==200){
						_this.leftDatas=res.data;  
         	}
     		},(err)=>{
                console.log(err);
        })
			}
		},
		change(item,i){
			this.leftDatas.map(function(item){
				item.flag=false;
			});
			this.leftDatas[i].flag=true;
			let _this=this;
			_this.$http.get('/categorygoods',{
					params:{
					 	mId:item.category_id
				 	}
				}).then((res)=>{
               console.log(res);  
					if(res.status==200){
						let data=res.data; 	 
         	}
     		},(err)=>{
                console.log(err);
        })
		}
			
	
}
</script>
<style>
.category_content .category_left ul li.active {
    background: #f60;
}
</style>