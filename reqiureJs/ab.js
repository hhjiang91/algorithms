define(function(){
    return {
        a: function(){
            a();
            console.log("ab.a()");
        },
        b:function(){
            b();
            console.log("ab.b()");
        }
    };
});