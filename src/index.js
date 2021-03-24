// write your code here

const url = 'http://localhost:3000/spiceblends'
const spiceBlendDetail = document.querySelector('div#spice-blend-detail')
const ingredientsContainer = document.querySelector('div.ingredients-container')
const updateForm = document.querySelector('form#update-form')
// console.log(updateForm)
const title = spiceBlendDetail.querySelector('h2.title')
const newIngredientForm = document.querySelector('form#ingredient-form')
const ingredientsList = ingredientsContainer.querySelector('ul.ingredients-list')

  /********************Devliverable 1**********************************/


// See the first spice blend (the spice blend with an ID of 1), including its title, image, and list of ingredients, when the page loads.


fetch(`${url}/1`)
    .then(resp => resp.json())
    .then(firstSpiceObj => {
        const img = spiceBlendDetail.querySelector('img.detail-image')
        img.src = firstSpiceObj.image 
        img.alt = firstSpiceObj.title 

        
        title.textContent = firstSpiceObj.title 

      
        
        firstSpiceObj.ingredients.forEach( ingredient => {
            const li = document.createElement('li')
            li.textContent = ingredient.name 
            ingredientsList.append(li)
            // console.log(ingredient)
        }) 
    })
    
    /***************Deliverable 2 ***************************************/

    // Update the title of the spice blend on the page when the #update-form is submitted, and still see that change when reloading the page (the new title should be persisted on the server).

    //find whole form (global var)--done
    //find input --done
    //add event 'submit' listener
    //PATCH the new info to the server
    //Update the DOM with the new title 

    const spiceBlendTitle = updateForm.querySelector('input#spiceblend-title')

    updateForm.addEventListener('submit', event => {
        event.preventDefault()
        // updateForm.dataset.id = event.target.ingredients.spiceblendId
        const updatedTitle = {

            title: event.target.title.value 

        }

        fetch('http://localhost:3000/spiceblends/1', {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updatedTitle)
        })
            .then(resp => resp.json())
            .then(newTitle => {
                title.textContent = newTitle.title
                // console.log(newTitle)
            })
            updateForm.reset()
    

    // console.log(updatedTitle)

    })


   
    

    /************************Deliverable 3*****************************/

    // Add a new ingredient to the spice blend when the #ingredient-form is submitted. The new ingredient should be displayed on the page (no persistence needed for now).

    //find ing form 
    //find input fields
    //add event listener


    const ingredientName = newIngredientForm.querySelector('input#ingredient-name')

    newIngredientForm.addEventListener('submit', event => {
        event.preventDefault()
        const li = document.createElement('li')
        // const ingredientName = newIngredientForm.querySelector('input#ingredient-name')

        // const updated = {
            
        // }
        

        ingredientName.textContent = event.target[0].name

        // console.log(ingredientName.value)
        li.append(ingredientName.value)
        ingredientsList.append(li)

        newIngredientForm.reset()
    })
    














































