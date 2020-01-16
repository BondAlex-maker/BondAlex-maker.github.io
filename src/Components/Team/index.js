const users = [
    {
        id: 1,
        name: 'Ruth',
        surname: 'Wood',
        imageSrc: './assets/images/team-1.jpg',
        profession: 'Founder, ceo',
        description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'

    },
    {
        id: 2,
        name: 'Ruth',
        surname: 'Wood',
        imageSrc: './assets/images/team-1.jpg',
        profession: 'Founder, ceo',
        description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum  dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
    },
    {
        id: 3,
        name: 'Ruth',
        surname: 'Wood',
        imageSrc: './assets/images/team-1.jpg',
        profession: 'Founder, ceo',
        description: 'Fuscentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
    },
    {
        id: 4,
        name: 'Ruth',
        surname: 'Wood',
        imageSrc: 'null',
        profession: 'Founder, ceo',
        description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
    }
];

const userListElem = document.getElementById('usersList');
userListElem.classList.add('team__inner');

appendUsersListItems(userListElem, users);

function appendUsersListItems (usersListElem, users) {
    users.forEach(
        user => {
            usersListElem.appendChild(createUserListElem(user));
        }
    );
}

function createUserListElem (user) {
    const team__itemElem = document.createElement('li');
    team__itemElem.classList.add('team__item');
    const team__photoElem = document.createElement('img');
    team__photoElem.setAttribute('src', user.imageSrc
        ? user.imageSrc : '../../assets/images/user-image.png');
    team__photoElem.setAttribute('alt', 'user photo');
    team__photoElem.classList.add('team__photo');

    const team__nameElem = document.createElement('div');
    team__nameElem.classList.add('team__name');
    team__nameElem.innerText = `${user.name} ${user.surname}`;

    const team__profElem = document.createElement('div');
    team__profElem.classList.add('team__prof');
    team__profElem.innerText = `${user.profession}`;

    const team__textElem = document.createElement('div');
    team__textElem.classList.add('team__text');
    const team__paragraphElem = document.createElement('p');
    team__paragraphElem.innerText = `${user.description}`;
    team__textElem.appendChild(team__paragraphElem);

    team__itemElem.appendChild(team__photoElem);
    team__itemElem.appendChild(team__nameElem);
    team__itemElem.appendChild(team__profElem);
    team__itemElem.appendChild(team__textElem);

    return team__itemElem;
}