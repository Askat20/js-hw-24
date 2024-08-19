// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };

// const copyOfPosts = {
//   ...posts,
// };
// console.log(copyOfPosts);

// const problematicCopy = JSON.parse(JSON.stringify(  posts));

// console.log(problematicCopy);

// const post = {
//   name: "posts",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comments: ["comment1", "comment2"],
// };
// const { comments: color, hello, ...rest } = post;

// console.log(rest);

//  колор массиву равен. внутри массива есть два элемента"comment1", "comment2"
// hello - undefined   так как в объекте нет свойства hello
//  rest - { id: 'post1', author: 'user1', body: '......'}   comments COLOR  МЕНЕН HELLO НУ АЛАТ АНЫ АЛГАНДАН КИЙИН REST ОСТАТКАСЫН АЛАТ






const comments = ["comment3", "comment4", "comment5", "comment1"]
const [undefined, comment1, ...rest] = comments
// undefined эмнеге барабар?
// comment1 эмнеге барабар?
// rest эмнеге барабар?



// undefined-ошибка, потому что мы не указали undefined как первый элемент массива.
// comment1 - "comment3"
// rest - ["comment4", "comment5", "comment1"]