// Access html
const app = document.getElementById('root');
// console.log(app);

// Create a div with a card class
const card = document.createElement('div');
// console.log(card);
card.setAttribute('class', 'card');
// console.log(card);

// place in website to the app root
app.appendChild(card);
// This will only be visible in the Inspect Elements tab, not in the HTML source code,


const cast_btn = document.getElementById('cast_btn');
const name_input = document.getElementById('name_input');
const cast_result = document.getElementById('cast_result');
const episode_result = document.getElementById('episode_result');

cast_btn.addEventListener('click', getCast);

fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(data => {
        data.forEach((character) => {
            // console.log(character.name);
            // console.log(character.nickname);
            // console.log(character.appearance);

            const span = document.createElement('span');
            span.textContent = `${character.name}, `;
            card.appendChild(span);

        })
    })

// get character by name
function getCast() {
    const nameInput = name_input.value;
    // console.log(name);
    fetch('https://www.breakingbadapi.com/api/characters?`${name=name}`')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // go thru array 
            // check if name is similar to name value, 

            const index = data.findIndex(nameList => nameList.name === nameInput);
            // console.log(result);

            // and get its array index and display the array image
            cast_result.innerHTML = `<img src=${data[index].img} alt="cast" />`

            // clear the window of previous output
            episode_result.innerHTML = ' ';

            // now display all season character appeared in a string format,
            // Create a ul-li-p and set the text content to the film's description limit to 300 chars
            const ul = document.createElement('ul');

            const arrayEpisodes = data[index].appearance;
            arrayEpisodes.forEach(element =>

                {
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.textContent = `S${element}`;

                    episode_result.appendChild(ul);
                    ul.append(li);
                    li.appendChild(p);
                }
            );
        });
}