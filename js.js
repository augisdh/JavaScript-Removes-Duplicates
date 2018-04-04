function removeDuplicates(infoArray) {
    return infoArray.filter(function(element, prop, array) {
        return array.indexOf(element) === prop;
    });
};