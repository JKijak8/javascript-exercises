const removeFromArray = function(array,...toDelete) {
    for(let i = 0; i < toDelete.length; i++) {
        while(true) {
            let index = array.indexOf(toDelete[i])
            if (index < 0) {
                break;
            }
            array.splice(index, 1);
        }
    } 
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
