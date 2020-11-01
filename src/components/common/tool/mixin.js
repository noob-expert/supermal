// mixin的使用
export const BackTopMixin={
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        backtopClick(){
            this.$refs.scrolloutside.scrollTo(0,0,400)
        }
        
    }
}