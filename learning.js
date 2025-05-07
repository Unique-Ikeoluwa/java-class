// let cars = ["Honda", "Toyota", "Ford", "Toyota", "BMW", "Toyota", "Audi"];
// for (let i= cars.length-1; i > 0; i--){
//     if (cars[i] === "Toyota"){
//         cars.splice(i, 1)
//     }
// }
// console.log(cars)

// let ingredients = ["lettuce", "bread", "tomato", "onion", "tomato", "beef"];
// let count= 0; 
// let after= "bread" 
// for (let i=0; i <=  ingredients.length-1; i++){
//     if (ingredients[i] === after){
//         ingredients.splice(i+1, 0, "cheese")} 
//         if (ingredients[i] === "tomato"){
//             count++;
//             } 
//             if(count === 2){
//                 ingredients.splice(i+1, 0, "sauce")
//             }
// }
// console.log(ingredients)

// let fruits = ["banana", "apple", "orange", "apple", "grape", "apple", "melon"];
// let count = 0;

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "apple") {
//     count++;
//     if (count === 3) {
//       fruits.splice(i + 1, 0, "green apple");
//       break;
//     }
//   }
// }

// console.log(fruits);

// let ingredients = ["lettuce", "bread", "tomato", "onion", "tomato", "beef"];

// for (let i = 0; i < ingredients.length; i++) {
//   if (ingredients[i] === "bread") {
//     ingredients.splice(i + 1, 0, "cheese");
//     break;
//   }
// }

// for (let i = ingredients.length - 1; i >= 0; i--) {
//   if (ingredients[i] === "tomato") {
//     ingredients.splice(i + 1, 0, "sauce");
//     break;
//   }
// }

// console.log(ingredients);
// let tasks = [];
// let filter = 'all'; // default filter

// // Function to add a new task
// function addTask(title) {
//   if (title === '') return;

//   const newTask = {
//     id: Date.now(),
//     title,
//     completed: false
//   };

//   tasks.push(newTask);
//   renderTasks();
// }

// // Function to toggle task completion
// function toggleTask(id) {
//   const task = tasks.find(t => t.id === id);
//   if (task) task.completed = !task.completed;
//   renderTasks();
// }

// // Function to delete a task
// function deleteTask(id) {
//   tasks = tasks.filter(t => t.id !== id);
//   renderTasks();
// }

// // Function to filter tasks based on status (all, completed, pending)
// function filterTasks(status) {
//   filter = status;
//   renderTasks();
// }

// // Function to render tasks in the console based on the current filter
// function renderTasks() {
//   console.clear(); // Clears the console for a fresh view
//   console.log(`Showing ${filter} tasks:`);

//   const filtered = tasks.filter(task => {
//     if (filter === 'all') return true;
//     if (filter === 'completed') return task.completed;
//     if (filter === 'pending') return !task.completed;
//   });

//   filtered.forEach(task => {
//     console.log(`[${task.completed ? 'x' : ' '}] ${task.title}`);
//   });
// }

// // Example to test the app (You can use these function calls to simulate actions):
// addTask("Buy groceries");
// addTask("Wash the car");
// addTask("Write JavaScript code");
// toggleTask(tasks[1].id); // Mark "Wash the car" as completed
// filterTasks('completed'); // Show only completed tasks
// deleteTask(tasks[0].id); // Delete "Buy groceries"
// filterTasks('pending'); // Show only pending tasks

// let movies = [];

// // Function to add a movie
// function addMovie(title, genre, year) {
//   const newMovie = {
//     id: Date.now(),
//     title,
//     genre,
//     year,
//     watched: false
//   };

//   movies.push(newMovie);
//   renderMovies();
// }

// // Function to mark a movie as watched or unwatched
// function toggleWatched(id) {
//   const movie = movies.find(m => m.id === id);
//   if (movie) movie.watched = !movie.watched;
//   renderMovies();
// }

// // Function to delete a movie
// function deleteMovie(id) {
//   movies = movies.filter(m => m.id !== id);
//   renderMovies();
// }

// // Function to list movies by genre or watched status
// function listMoviesBy(filter) {
//   let filteredMovies;

//   if (filter === 'watched') {
//     filteredMovies = movies.filter(m => m.watched);
//   } else if (filter === 'unwatched') {
//     filteredMovies = movies.filter(m => !m.watched);
//   } else if (filter === 'all') {
//     filteredMovies = movies;
//   } else {
//     filteredMovies = movies.filter(m => m.genre === filter);
//   }

//   renderMovies(filteredMovies);
// }

// // Function to sort movies by title or year
// function sortMovies(by) {
//   let sortedMovies;

//   if (by === 'year') {
//     sortedMovies = [...movies].sort((a, b) => a.year - b.year);
//   } else if (by === 'title') {
//     sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
//   }

//   renderMovies(sortedMovies);
// }

// // Function to render movies in the console
// function renderMovies(filteredMovies = movies) {
//   console.clear(); // Clear the console for fresh output
//   console.log("Movie Watchlist:");

//   if (filteredMovies.length === 0) {
//     console.log("No movies found.");
//   } else {
//     filteredMovies.forEach(movie => {
//       console.log(`[${movie.watched ? 'Watched' : 'Unwatched'}] ${movie.title} (${movie.year}) - Genre: ${movie.genre}`);
//     });
//   }
// }

// // Example to test the app (You can use these function calls to simulate actions):
// addMovie("Inception", "Sci-Fi", 2010);
// ;
// ;
// toggleWatched(movies[0].id); // Mark "Inception" as watched
// listMoviesBy("Sci-Fi"); // List all Sci-Fi movies
// sortMovies("year"); // Sort movies by year
// deleteMovie(movies[1].id); // Delete "The Dark Knight"
// listMoviesBy("watched"); // List all watched movies

const tasks = [
    { text: "Do laundry", done: true },
    { text: "Study JS", done: false },
    { text: "Buy groceries", done: false },
  ];
  
  const incompleteTasks = tasks.filter(task => !task.done);
  console.log(incompleteTasks);

  const movies = [
    { title: "Inception", genre: "Sci-Fi" },
    { title: "Titanic", genre: "Romance" },
    { title: "Interstellar", genre: "Sci-Fi" },
  ];
  
  const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
  console.log(sciFiMovies);
  



