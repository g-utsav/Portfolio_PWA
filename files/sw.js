
const cacheName = "cache-v1";
const resourcesToPrecache = [  
    "/Portfolio_PWA/index.html",
    "/Portfolio_PWA/files/main.js",
    "/Portfolio_PWA/files/styles.css",
    "/Portfolio_PWA/files/styles1.css",
    "/Portfolio_PWA/files/scrollreveal.js"
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