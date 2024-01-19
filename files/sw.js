
const cacheName = "cache-v1";
const resourcesToPrecache = [
    "/",
    "index.html",
    "/files/main.js",
    "/files/styles.css",
    "/files/styles1.css",
    "/files/scrollreveal.js"
];


self.addEventListener("install", event =>{
    console.log("Install Event");
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    )
});

self.addEventListener("activate", event =>{
    console.log("Activate Event");
});

self.addEventListener("fetch", event =>{
    console.log("Fetch Interceptor for ",event.request.url);
});