export const generateKey = (): string => {
    const time = (new Date()).getTime();
    const key = Math.ceil(time * Math.random());
    return key.toString();//e
}