
// Function for the shopping list functionality
function shoppingListFunctionality() {

    // Functionality for when item is added to the list
    $('#js-shopping-list-form').submit(event => {

        // Prevent the default submit behavior
        event.preventDefault();

        // Store the entered item
        const item = $(this).find('#shopping-list-entry');

        // Add the entered item to the list
        $('.shopping-list').append(`
                                    <li>
                                        <span class="shopping-item">${item.val()}</span>
                                        <div class="shopping-item-controls">
                                            <button class="shopping-item-toggle">
                                                <span class="button-label">check</span>
                                            </button>
                                            <button class="shopping-item-delete">
                                                <span class="button-label">delete</span>
                                            </button>
                                        </div>
                                    </li>`);
        
        // Reset the entered item
        item.val("");
    });

    // Functionality for removing an item.
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });


    // Functionality for checking and unchecking items in the list
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
        debugger;
    });
};


$(shoppingListFunctionality);




