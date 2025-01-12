import { bookList } from "./bookList.js";

export const bookData = (data) => /*html*/`
<table>
    <th>Id</th>
    <th>Book name</th>
    <th>Author name</th>
    ${data.map((book) => bookList(book))}
</table>
`