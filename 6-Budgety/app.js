// BUDGET CONTROLLER
var budgetController = (function() {
    
    
    
    
    
    
//    var x = 23; // private
//    
//    var add = function(a) { // private 
//        return x + a;
//    }
//    
//    return {
//        publicTest: function(b) { // public, can be accessed by outside and can access x and add() for closures
//            return add(b);
//        }
//    }
})();

// UI CONTROLLER
var UIController = (function() {
    
    // Some code
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    document.querySelector('.add__btn').addEventListener('click', function() {
        // 1. get the filled input data
        
        // 2. add the item to the budget controller
        
        // 3. add the item to the UI
        
        // 4. calculate the budget
        
        // 5. display the budget on the UI
    });
    
    
    
//    var z = budgetCtrl.publicTest(5);
//    // do not use budgetController because the name can change, so pass it as param
//    return {
//        anotherPublic: function() {
//            console.log(z);
//        }
//    }
})(budgetController, UIController);















