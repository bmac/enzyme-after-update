
function afterUpdate(wrapper) {
  return new Promise(function(resolve) {
    var instance = wrapper.node
    var oldComponentDidUpdate = instance.componentDidUpdate
    instance.componentDidUpdate = function() {
      if (oldComponentDidUpdate) {
        // restore the old component did update
        instance.componentDidUpdate = oldComponentDidUpdate
        oldComponentDidUpdate.apply(this, arguments)
      }
      resolve()
    }
  })
}

module.exports = afterUpdate
