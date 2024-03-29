class BookClub {
  library;
  books = [];
  members = []
  constructor(library) {
    this.library = library;
  }

  addBook(title, author) {
    const existingBook = this.books.find(b => b.title === title || b.author === author);

    if (existingBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }

    this.books.push({
      title,
      author
    });

    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }

  addMember(memberName) {
    const existingMember = this.members.find(m => m.memberName === memberName);

    if (existingMember) {
      return `Member ${memberName} is already a part of the book club.`;
    }

    this.members.push({
      memberName
    });

    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    const existingMember = this.members.find(m => m.memberName === memberName);
    const existingBook = this.books.find(b => b.title === bookTitle);

    if (!existingMember) {
      throw new Error(`Member ${memberName} not found.`);
    }

    if (!existingBook) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    this.books = this.books.filter(b => b.title !== bookTitle);

    return `Member ${memberName} has been assigned the book "${bookTitle}" by ${existingBook.author}.`;
  }

  generateReadingReport() {
    if (this.members.length === 0) {
      return "No members in the book club.";
    }

    if (this.books.length === 0) {
      return "No available books in the library.";
    }

    const availableBooksReport = `Available Books in ${this.library} library:\n${this.books.map(book => `"${book.title}" by ${book.author}`).join('\n')}`;

    return availableBooksReport;
  }
}

// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Member Peter has been assigned the book "1984" by George Orwell.
// Member Alice has been assigned the book "To Kill a Mockingbird" by Harper Lee.
// No available books in the library.


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());