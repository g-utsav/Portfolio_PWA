self.addEventListener("install", event =>{
    console.log("Install Event");
});

self.addEventListener("activate", event =>{
    console.log("Activate Event");
});

self.addEventListener("fetch", event =>{
    console.log("Fetch Interceptor for ",event.request.url);
});