import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            tasks: [
                "Sew seeds",
                "Cut grass",
                "Remove weeds"
            ]
        }
})
});