export const sortCategory = (array) => {
    array.sort((a, b) => {
        let catA = a.category.toLowerCase()
        let catB = b.category.toLowerCase()
        return catA.localeCompare(catB)
    })
} 
