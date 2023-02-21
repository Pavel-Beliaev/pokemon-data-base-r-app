export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

// export const getPagesArray = (start, end) => {
//     let length = end - start + 1;
//     return Array.from({ length }, (_, idx) => idx + start);
// };

export const getPagesArray = (totalPages) => {
    const respons = []
    for (let i = 1; i <= totalPages; i++) {
        respons.push(i);
    }
    return respons
}