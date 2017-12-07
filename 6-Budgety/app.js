// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            // create new ID
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            
            // create new item based on type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // push the item into our data structure
            data.allItems[type].push(newItem);
            
            // return the item
            return newItem;
        }
    }

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
    
    var setUpEventlisteners = function() {
        var DOM = UICtrl.getDOMstrings(); // get object from other controller. DO NOT forget ()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // callback
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) { // 'which' for older browers
                ctrlAddItem();
            }
        });
    };
        
    var ctrlAddItem = function() {
        // 1. get the filled input data
        var input = UIController.getinput();
//        console.log(input);
        // 2. add the item to the budget controller
        
        // 3. add the item to the UI
        
        // 4. calculate the budget
        
        // 5. display the budget on the UI
    };
    
    return {
        init: function() {
            console.log('APP has started.');
            setUpEventlisteners();
        }
    }

})(budgetController, UIController);



controller.init(); // the only line outside











