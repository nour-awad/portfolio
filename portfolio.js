const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".pic", {
    ...scrollRevealOption, 
    interval: 500
});
ScrollReveal().reveal("#skills", { 
    ...scrollRevealOption, 
    interval: 500
});

ScrollReveal().reveal(".card", { 
    ...scrollRevealOption, 
    interval: 500
    
});

ScrollReveal().reveal(".cv", { 
    ...scrollRevealOption, 
    interval: 500 
});