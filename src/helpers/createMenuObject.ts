type menuObject = '' | 'all' | 'dog' | 'cat' |'fish';

export const createMenuObject = (menu: menuObject) => {
    
    let nav = {all: false, dog: false, cat: false, fish: false};
    
    if (menu != '') {
        nav[menu] = true;
    } else {

    }
    

    return nav;
    
    
}