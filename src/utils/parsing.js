
export const getIdUrl = (url) => {
    const urls = url.split('/');
    const file = urls[urls.length - 2];
    return file
}
