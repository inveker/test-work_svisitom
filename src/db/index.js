const DB_KEY = 'db';

const initialDB = [
    {number: 0, name: 'Name1', date: '2021', status: 'on'},
    {number: 1, name: 'Name2', date: '2021', status: 'of'},
    {number: 2, name: 'Name3', date: '2021', status: 'of'},
    {number: 3, name: 'Name4', date: '2021', status: 'on'},
    {number: 4, name: 'Name5', date: '2021', status: 'on'},
    {number: 5, name: 'Name1', date: '2021', status: 'on'},
    {number: 6, name: 'Name2', date: '2021', status: 'of'},
    {number: 7, name: 'Name3', date: '2021', status: 'of'},
    {number: 8, name: 'Name4', date: '2021', status: 'on'},
    {number: 9, name: 'Name5', date: '2021', status: 'on'},
    {number: 10, name: 'Name1', date: '2021', status: 'on'},
    {number: 11, name: 'Name2', date: '2021', status: 'of'},
    {number: 12, name: 'Name3', date: '2021', status: 'of'},
    {number: 13, name: 'Name4', date: '2021', status: 'on'},
    {number: 14, name: 'Name5', date: '2021', status: 'on'},
    {number: 15, name: 'Name1', date: '2021', status: 'on'},
    {number: 16, name: 'Name2', date: '2021', status: 'of'},
    {number: 17, name: 'Name3', date: '2021', status: 'of'},
    {number: 18, name: 'Name4', date: '2021', status: 'on'},
    {number: 19, name: 'Name5', date: '2021', status: 'on'},
    {number: 20, name: 'Name1', date: '2021', status: 'on'},
];

export function init() {
    if(localStorage.getItem(DB_KEY) == null)
        save(initialDB);
}

export function save(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export function getAll() {
    return new Promise((res, rej) => {
        try {
            const db =  JSON.parse(localStorage.getItem(DB_KEY));
            res(db);
        } catch (e) {
            rej(e);
        }
    });
}

export function updateOne(row) {
    return new Promise((res, rej) => {
        getAll().then(db => {
            for(let i = 0; i < db.length; i++)
                if(db[i].number == row.number) {
                    db[i] = Object.assign(db[i], row);
                    save(db);
                    res();
                    break;
                }
        });
    });
}