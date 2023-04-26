import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
   
    res.render('pages/page', {
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        nav: createMenuObject('all')
    })
}

export const dogs = (req: Request, res: Response) => {
    
    res.render('pages/page', {
        banner:{
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        nav: createMenuObject('dog')
    })
}

export const cats = (req: Request, res: Response) => {

    res.render('pages/page', {
        banner:{
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        nav: createMenuObject('cat')
    })
    
}

export const fishes = (req: Request, res: Response) => {
    
    res.render('pages/page', {
        banner:{
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        nav: createMenuObject('fish')
    })
}

