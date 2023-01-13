function addItem() {
    var itemList = document.getElementById('items');
    var inputAmount = document.getElementById('amount');
    var inputDesc = document.getElementById('desc');
    var inputCategory =document.getElementById('category');

    var ExAmount=inputAmount.value;
    var ExDesc=inputDesc.value;
    var ExCategory=inputCategory.value;
    var ExDetails = {
        Amount : ExAmount,
        Category : ExCategory,
        Description : ExDesc,
        }; 
    var SerialEx = JSON.stringify(ExDetails); 

    //new list item
    var newEx = document.createElement("li");
    newEx.className = 'list-group-item';
    newEx.innerText = ExAmount+" - "+ExCategory+" - "+ExDesc;    
    localStorage.setItem(ExDesc, SerialEx);
    
    //Del button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Expense";
    deleteButton.className = 'btn-danger btn-sm';
    deleteButton.onclick = function() {
        localStorage.removeItem(ExDesc); 
        itemList.removeChild(newEx);
    };
    newEx.appendChild(deleteButton);

    //Edit buttom
    var editButton = document.createElement("button");
    editButton.innerText = "Edit Expense";
    editButton.className = 'btn-primary btn-sm';
    editButton.onclick = function() {
        localStorage.removeItem(newEx)  
        inputAmount.value = ExAmount;
        inputCategory.value = ExCategory;
        inputDesc.value = ExDesc;
        
        localStorage.removeItem(ExDesc);
        itemList.removeChild(newEx);
    };    
    newEx.appendChild(editButton);  

    itemList.appendChild(newEx);   
        
}