class User {
    // Constructor de la class User.
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    // Retornar nombre completo del User.
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    // Añadir un animal al array de mascotas.
    addPets(pet) {
        this.pets.push(pet);
    }

    // Contar la cantidad de animales del array de mascotas.
    countMascotas() {
        return this.pets.length;
    }

    // Añadir un libro al array de libros, con el nombre del libro y el autor del mismo.
    addBook(nameBook, author) {
        this.books.push({name: nameBook, author: author});
    }

    // Obtener un array con los nombres de los libros.
    getBooksNames() {
        const arrayNameBooks = [];
        this.books.forEach((book) => {
            arrayNameBooks.push(book.name);
        });
        return arrayNameBooks;
    }

    // Añadí está función para recorrer el array de nombres de libros, para tener una salida por consola más "linda". No es relevante la función para el desafio.
    readNameBooks() {
        const nameBooks = this.getBooksNames();
        let aux = '';
        nameBooks.forEach(name => {
            aux += `${name}`;
            if(name !== nameBooks[nameBooks.length - 1]) {
                aux += ' - ';
            }
        });
        return aux;
    }
}

const pets = ['Perro', 'Gato', 'Tortuga'];
const books = [
    {name: 'Una corte de rosas y espinas', author: 'Sarah J. Mass'},
    {name: 'Antes de diciembre', author: 'Joana Marcús'}
]

const usuario = new User('Tomas', 'Tiseira', books , pets);

usuario.addPets('Loro');
usuario.addPets('Conejo');

usuario.addBook('Culpa mía', 'Mercedes Ron');
usuario.addBook('La reina roja', 'Victoria Aveyard');

console.log(`El nombre del usuario es: ${usuario.getFullName()}.`);
console.log(`La cantidad de mascotas de ${usuario.getFullName()} es de: ${usuario.countMascotas()}.`);
console.log(`Los nombres de los libros del usuario son: ${usuario.readNameBooks()}.`);