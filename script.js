let draggables = document.querySelectorAll('.draggable')
let containers = document.querySelectorAll('.container')
let uppers = document.querySelectorAll('.upper')
let lowers = document.querySelectorAll('.lower')
let high = document.querySelectorAll('.high')
let low = document.querySelectorAll('.low')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    console.log("test");
    })
})

uppers.forEach(upper => {
    upper.addEventListener('dragover', e => {
        console.log('high')
        const draggable = document.querySelector('.dragging')
            draggable.classList.add('high')
            draggable.classList.remove('low')
    })
    upper.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElementY(upper, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            upper.appendChild(draggable)
        } else {
            upper.insertBefore(draggable, afterElement  )
        }
    })
})

lowers.forEach(lower => {
    lower.addEventListener('dragover', e => {
        console.log('low')
        const draggable = document.querySelector('.dragging')
        draggable.classList.add('low')
        draggable.classList.remove('high')
    })
    lower.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElementX(lower, e.clientX)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            lower.appendChild(draggable)
        } else {
            lower.insertBefore(draggable, afterElement  )
        }
    })
})


    function getDragAfterElementY(upper, y) {
        const draggableElements = [...upper.querySelectorAll('.draggable, .high:not(.dragging, .low)')]
    
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offsetY = y - box.top - box.height / 2
            console.log(offsetY)
            if(offsetY < 0 && offsetY > closest.offsetY) {
                return { offsetY: offsetY, element: child }
            } else {
                return closest
            }
        }, { offsetY: Number.NEGATIVE_INFINITY }).element    
    };


    function getDragAfterElementX(lower, x) {
        const draggableElements = [...lower.querySelectorAll('.draggable, .low:not(.dragging, .high)')]
    
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offsetX = x - box.left - box.width / 2
            console.log(offsetX)
            if(offsetX < 0 && offsetX > closest.offsetX) {
                return { offsetX: offsetX, element: child }
            } else {
                return closest
            }
        }, { offsetX: Number.NEGATIVE_INFINITY }).element    
    };

    let goog = 0

var loadFile = function(event) {
    for (let i = 0; i < event.target.files.length; i++) {
        var image = document.createElement('img');
        image.src = URL.createObjectURL(event.target.files[i]);
        image.id = "output";
        image.classList.add("draggable","low");
        image.draggable = ("true")
        document.querySelector(".lower").appendChild(image);
    }

    let draggables = document.querySelectorAll('.draggable')
    let containers = document.querySelectorAll('.container')
    let uppers = document.querySelectorAll('.upper')
    let lowers = document.querySelectorAll('.lower')
    let high = document.querySelectorAll('.high')
    let low = document.querySelectorAll('.low')
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
    
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        console.log("test");
        })
    })
    
    uppers.forEach(upper => {
        upper.addEventListener('dragover', e => {
            console.log('high')
            const draggable = document.querySelector('.dragging')
                draggable.classList.add('high')
                draggable.classList.remove('low')
        })
        upper.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElementY(upper, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                upper.appendChild(draggable)
            } else {
                upper.insertBefore(draggable, afterElement  )
            }
        })
    })
    
    lowers.forEach(lower => {
        lower.addEventListener('dragover', e => {
            console.log('low')
            const draggable = document.querySelector('.dragging')
            draggable.classList.add('low')
            draggable.classList.remove('high')
        })
        lower.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElementX(lower, e.clientX)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                lower.appendChild(draggable)
            } else {
                lower.insertBefore(draggable, afterElement  )
            }
        })
    })
    
    
        function getDragAfterElementY(upper, y) {
            const draggableElements = [...upper.querySelectorAll('.draggable, .high:not(.dragging, .low)')]
        
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offsetY = y - box.top - box.height / 2
                console.log(offsetY)
                if(offsetY < 0 && offsetY > closest.offsetY) {
                    return { offsetY: offsetY, element: child }
                } else {
                    return closest
                }
            }, { offsetY: Number.NEGATIVE_INFINITY }).element    
        };
    
    
        function getDragAfterElementX(lower, x) {
            const draggableElements = [...lower.querySelectorAll('.draggable, .low:not(.dragging, .high)')]
        
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offsetX = x - box.left - box.width / 2
                console.log(offsetX)
                if(offsetX < 0 && offsetX > closest.offsetX) {
                    return { offsetX: offsetX, element: child }
                } else {
                    return closest
                }
            }, { offsetX: Number.NEGATIVE_INFINITY }).element    
        };
};