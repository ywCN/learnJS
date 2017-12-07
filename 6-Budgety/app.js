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
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            
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
        },
        testing: function() { // just for testing
            console.log(data);
        }
    }

})();

// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = { // make maintance easier
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };
    
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // create HTML string with placeholder text
            // % for not replacing something else accidentally
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); // returns a list
            
            fieldsArr = Array.prototype.slice.call(fields); // convert list to array; list does not have slice() method
            
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            
            // set focus back
            fieldsArr[0].focus();
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
    
    var updateBudget = function() {
        
        // 1. calculate the budget
        
        // 2. return the budget
        
        // 3. display the budget on the UI
    };
        
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. get the filled input data
        input = UIController.getinput();

        // 2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        
        // 4. clear the field
        UICtrl.clearFields();
        
        
    };
    
    return {
        init: function() {
            console.log('APP has started.');
            setUpEventlisteners();
        }
    }

})(budgetController, UIController);



controller.init(); // the only line outside











