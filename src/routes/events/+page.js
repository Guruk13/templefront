    // src/routes/posts.ts
    export async function load(){
        const res = await fetch('http://localhost:1337/api/events?populate=*');
        const data = await res.json();
        return { body: data };
    }
