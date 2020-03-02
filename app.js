new Vue({
    el: "#app",
    data: {
        principal: "",
        rate: "",
        number: "",
        time: "",
    },
    methods:{
        result: function(){
           let  Rate= this.rate/100;
           let  Principal= this.principal;
           let  Number= this.number*this.time;
            let compound= Principal*((1+(Rate/this.number))**Number)
            return compound.toFixed(2);
        }
    }
})