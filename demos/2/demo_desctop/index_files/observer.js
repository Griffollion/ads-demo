var observer;

function addObserver(selector, onIntersection, observerOptions = {}) {
    observer = new IntersectionObserver(onIntersection, observerOptions);
    document.querySelectorAll(selector).forEach(function (target) {
        observer.observe(target);
    });
}

function removeObserver(selector) {
    document.querySelectorAll(selector).forEach(function(target) {
        observers.unobserve(target);
    });
}