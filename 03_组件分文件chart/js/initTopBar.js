export default function(){
    Vue.component("topBar", {
        template: '#topBar',
        data(){
            return{
                //title:"全国土地利用结构汇总统计"
            }
        },
        props:["title"]
    })
}