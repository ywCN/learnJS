// BUDGET CONTROLLER
var budgetController = (function() {
    
    
    

})();

// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = { // make maintance easier
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() { // to make DOMstrings public
            return DOMstrings;
        }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings(); // get object from other controller. DO NOT forget ()
    console.log(DOM);
    
    var ctrlAddItem = function() {
        // 1. get the filled input data
        var input = UIController.getinput();
        console.log(input);
        // 2. add the item to the budget controller
        
        // 3. add the item to the UI
        
        // 4. calculate the budget
        
        // 5. display the budget on the UI
    }
    
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // callback
    
    document.addEventListener('keypress', function(event) {
//        console.log(event); // we need to use the keyCode property
        if (event.keyCode === 13 || event.which === 13) { // 'which' for older browers
            ctrlAddItem();
        }
    });

})(budgetController, UIController);















