# MONSTER WEBSITE
Welcome to the Monster website . It allows you to manage a list of monsters, adding new monsters via a form and displaying them in a list.

## FEATURES
- Add Monsters: Use the form to enter a monster's name, age, and description. Click submit to add the monster to the list.
- Fetch Monsters: On page load, existing monsters are fetched from a server and displayed in the list.
### Installation
- Clone the repository:
- bash
- Copy code
- git clone `git@github.com:Margaret617/Monsters.git`
### Navigate into the project directory:
- bash
- Copy code
- cd monster
- Open index.html in your web browser.
### Usage
- Fill out the form fields (Name, Age, Description) and click Submit to add a new monster.
- Existing monsters are fetched from the server and displayed in the table upon page load.
- Errors are logged to the console if there are issues fetching or adding monsters.
#### Technologies Used
- HTML5
- CSS3
- JavaScript
- API Reference
  The application interacts with a backend server running locally at http://localhost:3000/monsters.
  Endpoints:
  GET /monsters: Retrieves existing monsters.
  POST /monsters: Adds a new monster.
