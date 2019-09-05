function handleEvent(eventName, { onElement, withCallback, useCapture = false } = {}, thisArg) {
    const element = onElement || document.documentElement

    function handler(event) {
        if (typeof withCallback === 'function') {
            withCallback.call(thisArg, event)
        }
    }

    handler.destroy = function() {
        return element.removeEventListener(eventName, handler, useCapture)
    }

    element.addEventListener(eventName, handler, useCapture)
    return handler
}

/* // 你需要的时候
const handleClick = handleEvent('click', {
    onElement: element,
    withCallback: (event) => {
        console.log('Tada!')
    }
})

// 你想删除它的时候
handleClick.destroy() */