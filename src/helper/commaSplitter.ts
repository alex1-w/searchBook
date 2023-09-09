export const commaSlicer = (array: any) => {
    return array.map((item: any) => Object.values(item)).join(', ');
}