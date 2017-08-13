
Vue.component('cisco-student', {
   props: ['students'],
  template: '<li>{{ student }} </li>'
})


var app = new Vue({
    el: "#app",
    data: {
        message: "Navid is sorta kinda cool too", 
        message2: "Jasmine is sorta kinda cool sometimes too", 
        message3: 'You loaded this page on ' + new Date(), 
        seen: false, 
        students: [
            "Oskar",
            "Samuel",
            "Noor",
            "Ellis",
            "Jonanthan",
            "Adeola",
            "Sharan",
            "Ambrose",
            "Kevin",
            "Joel",
            "Denzel",
            "Nick",
            "Nigel",
            "Jared",
            "Jason",
            "Anthony",
            "Abakir"
        ]
    }, 
    methods:{
        showDiv: function(){
            this.seen = !this.seen;
        }
    }
});