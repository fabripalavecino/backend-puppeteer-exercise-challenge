const isDisabled = (element) => {
    if(element.nodeName !== 'BUTTON') {
        return undefined;
    }
    else if(element.disabled && element.nodeName === 'BUTTON') {
        return 'Pending';
    }else {
        return 'Completed';
    }
}


const processDataTable =  (tbody) => {
    console.log(tbody);
    [...tbody.rows].map(r => [...r.cells].reduce((previous,current,i) => {
    if(i !== 1) {
        console.log('current: ', current);
        current = isDisabled(current.children[0]) || current.innerText;
        previous.push(current);
        //console.log('previous: ', previous);
    }
    return previous;
    },[]).reduce((a, v, i) => {
        if(i === 0) {
            return {...a, ['DATE']: v}
        }else if(i === 1) {
            return {...a, ['TYPE']: v}
        }else if(i === 2) {
            return {...a, ['AMMOUNT']: v}
        }else if(i === 3) {
            return {...a, ['STATE']: v}
        }
    }, {})).slice(1)}


module.exports = processDataTable;


