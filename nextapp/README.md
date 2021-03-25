## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

- App has 404 error page
- On main page '/', posts upload from server, clicking on post title or post text you will be redirected to comment section '/posts/[id]'     
- On page "/posts" - opens page with comments. Unique comment '/posts/[id]'
- On page 'posts/new' opens interface for creating new post 
- Interface for deleting included in delete button
- If you want to change post, click on edit button, and you will be redirected to edit page  '/edit/[id]'  


//bugs
I've with error, http code 500, unfortunately user can create only one comment below the post, after creating second comment occurs error.      