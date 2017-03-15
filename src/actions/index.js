export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action with
  // an object of type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
