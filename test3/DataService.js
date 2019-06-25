export const processData = (data) => {
    return new Promise((resolve, reject) => {
        //setTimeout(() => {
            resolve({
                data: {
                    something: 'a',
                    else: 'b'
                }
            });
        //}, 1500);
    });
}

export default {
    processData
}