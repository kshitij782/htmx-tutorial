export const bookList = (book) => /*html*/`
<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class="btn btn-primary">
                Edit Book
            </button>
        </td>
        <td>
            <button
                class="btn btn-primary">
                Delete
            </button>
        </td>
</tr>
`;