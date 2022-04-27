This is my Github work sample with Next.js, and Redux.

To start the project you first need to create a .env file and paste the following content:
```bash
NEXT_PUBLIC_MOCKAPI_BASE_URL="https://6263f434a6adc673188b48db.mockapi.io/api/v1"
```
Then run 
```bash
npm run dev
# or
yarn dev
```
and open [http://localhost:3000](http://localhost:3000) in your browser.

I used redux and RTK to handle the user dialog and its information.

I used SSR for the users list page to populate the props before the page is rendered, resulting in a faster, more comfortable user experience.