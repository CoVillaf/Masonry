
const masonryLayout = (containerElem,itemsElems,columns) => {
    /* Add 2 classes to the list: containerElem */
    containerElem.classList.add('masonry-layout', `columns-${columns}`)

    /* Void array, to create 3 elements (3 columns)*/
    let columnsElements = []

    /* ITERATION TO CREATE COLUMNS */
    /*Creates as many elements as columns were given to function: masonryLayout
     as parameter */
    for (let i = 1; i <= columns; i++) {
        /* To every iteration, crete an element (column): */
        let column = document.createElement('div')
        /* Add a class to the created column, add an identifier to every column: */
        column.classList.add('masonry-column', `column-${i}`)
        /* Put that element into the container: */
        containerElem.appendChild(column)
        /* Add the column to the array */
        columnsElements.push(column)
    }

    /* ITERATION IN EVERY CREATED COLUMN */
    /* Math.ceil: ROUNDS a number to the next upper  
       Math.ceil(itemsElems.length / columns): Example
            14 elements split into 3 columns: 4 iterations + 1 iteration
        m: n-row, n: iterates in every row (representing a column)
    */
   for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
       for(let n = 0; n < columns; n++) {

            /* n: represents column
              put the index of element */
           let item = itemsElems[m * columns + n]
           columnsElements[n].appendChild(item)
           /* Add vertical gap: */
           item.classList.add('masonry-item')
        }
    }
}

/*masonryLayout(document.getElementById('gallery'),document.querySelectorAll('.gallery-item'), 3)*/
/* masonryLayout = (containerElem,itemsElems,columns) */












