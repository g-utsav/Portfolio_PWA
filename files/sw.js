
const cacheName = "cache-v1";
const resourcesToPrecache = [  
    "/Portfolio_PWA/index.html",
"/Portfolio_PWA/files/boxicons.min.css",   
"/Portfolio_PWA/files/hiberrico.png",
"/Portfolio_PWA/files/ld.png",
"/Portfolio_PWA/files/project3.png",
"/Portfolio_PWA/files/styles.css",
"/Portfolio_PWA/files/classDiagram.jpeg",  
"/Portfolio_PWA/files/htmlico.png",
"/Portfolio_PWA/files/main.js",
"/Portfolio_PWA/files/project4.png",
"/Portfolio_PWA/files/styles1.css",
"/Portfolio_PWA/files/cssico.png",         
"/Portfolio_PWA/files/images.png",
"/Portfolio_PWA/files/mysql.png",
"/Portfolio_PWA/files/scrollreveal.js",
"/Portfolio_PWA/files/sw.js",
"/Portfolio_PWA/files/gh.svg",             
"/Portfolio_PWA/files/javaico.png",
"/Portfolio_PWA/files/pic10.PNG",
"/Portfolio_PWA/files/springbootico.png",
"/Portfolio_PWA/files/h1.png",             
"/Portfolio_PWA/files/jsico.png",
"/Portfolio_PWA/files/profile4.png",
"/Portfolio_PWA/files/springico.png"
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

    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );

});