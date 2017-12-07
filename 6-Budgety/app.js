var budgetController = (function() {
    var x = 23; // private
    
    var add = function(a) { // private 
        return x + a;
    }
    
    return {
        publicTest: function(b) { // public, can be accessed by outside and can access x and add() for closures
            return add(b);
        }
    }
})();


var UIController = (function() {
    
    // Some code
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(5);
    // do not use budgetController because the name can change, so pass it as param
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);





