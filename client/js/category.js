var createCategoryForm = document.getElementById('createCategoryForm');
createCategoryForm.addEventListener('submit', async function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var imageUrl = document.getElementById('imageUrl').value;
    var token = localStorage.getItem('token');

    try {
        var res = await fetch("http://localhost:5004/api/categories/cerate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            },
            body: JSON.stringify({
                name,
                description,
                price,
                category,
                imageUrl
            })
        })
        if (res.status === 201) {
            var data = await res.json();
            console.log('categories created successfully:', data);
            loadProducts();
            // Optionally, redirect or update the UI
        } else {
            console.error('Error creating categories:', res.statusText);
        }
    } catch (error) {
        console.error('Error creating categories:', error);
    }
})


var categoriesBody = document.getElementById('categoriesBody');
async function loadProducts() {
    const token = localStorage.getItem('token');
    try {
        var res = await fetch("http://localhost:5004/api/categories/all", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 200) {
            var data = await res.json();
            console.log(data)
            renderProducts(data);
        } else {
            console.error('Error fetching categories:', res.statusText);
        }

    } catch (error) {
        console.error('Error fetching categories:', error);

    }


}


function renderCategories(categories) {
    categoriesBody.innerHTML = '';
    categories.forEach( category => {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${category._id}</td>
            <td>${category.name}</td>
            <td>${category.description}</td>
            <td><img src="${category.imageUrl}" alt="${category.name}" width="50"/></td>
            <td>
                <button class="btn btn-sm btn-primary edit-btn" data-id="${category._id}">Edit</button>
                <button class="btn btn-sm btn-danger delete-btn" data-id="${category._id}">Delete</button>
            </td>
        `;
        categoriesBody.appendChild(tr);
    });
    // Attach event listeners to edit and delete buttons
}
loadCategories();