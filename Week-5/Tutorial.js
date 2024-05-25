// Question no. 1 
//Using querySelector to select the first paragraph and change its text content
document.querySelector('#paragraph1').textContent = "Hello, DOM!";

//Using getElementById to select the div and change its background color to blue
document.getElementById('myDiv').style.backgroundColor = 'blue';

// 2. Creating a text input and a paragraph. Write a function that counts and displays the number of characters entered in the input in real-time.
document.getElementById('textInput').addEventListener('keyup', function() {
    var inputText = this.value;
    document.getElementById('charCount').textContent = 'Character count: ' + inputText.length;
});

// 3. Creating a function called getFruit
function getFruit(fruitName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fruitName.toLowerCase() === 'watermelon') {
                reject('Sorry, we\'re out of watermelons');
            } else {
                resolve(`Here is your ${fruitName}`);
            }
        }, 1000);
    });
}


// 4. Creating a function called arrayManipulation
function arrayManipulation(numbers, operationCallback, filterCallback) {
    let manipulatedArray = numbers.map(operationCallback).filter(filterCallback);
    return manipulatedArray;
}

// 5. Creating an asynchronous function called fetchUserData
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Error fetching user data');
        }

        const userData = await response.json();
        return { name: userData.name, email: userData.email };
    } catch (error) {
        throw new Error('Error fetching user data');
    }
}

// 6. Fetching data from API and display in a browser
async function fetchDataAndDisplay() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        // Filter todos with completed status true and id <= 50
        const filteredTodos = todos.filter(todo => todo.completed && todo.id <= 50);

        // Display in the browser
        filteredTodos.forEach(todo => {
            console.log(`UserId: ${todo.userId}, Title: ${todo.title}, Status: ${todo.completed}`);
        });
    } catch (error) {
        console.error('Error fetching data from the API:', error);
    }
}

// Call the function to fetch and display data
fetchDataAndDisplay();

