document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#monster-form');
    const monsterList = document.querySelector('#monster-list tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const age = parseInt(document.querySelector('#age').value);
        const description = document.querySelector('#description').value;

        craftMonster(name, age, description);
        form.reset();
    });
    function fetchMonsters() {
        fetch('http://localhost:3000/monsters')
            .then(response => response.json())
            .then(monsters => {
                monsters.forEach(monster => addMonsterToList(monster));
            })
            .catch(error => console.error('Error fetching monsters:', error));
    }
    fetchMonsters();

    function craftMonster(name, age, description) {
        const monster = {
            name: name,
            age: age,
            description: description
        };

        fetch('http://localhost:3000/monsters', {
            method: 'POST',
            headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    body:JSON.stringify(monster)
        })
        .then(response => response.json())
        .then(newMonster => addMonsterToList(newMonster))
        .catch(error => console.error('Error crafting monster:', error));
    }

    function addMonsterToList(monster) {
        const row = `
            <tr>
                <td>${monster.name}</td>
                <td>${monster.age}</td>
                <td>${monster.description}</td>
            </tr>
        `;
        monsterList.insertAdjacentHTML('afterbegin', row);
    }
});
