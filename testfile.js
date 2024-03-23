setInterval(function() {
    if (window.manager && window.manager.cat) {
        window.manager.cat.buyAuto = true
    }
    console.log(window.manager)
}, 1000)
