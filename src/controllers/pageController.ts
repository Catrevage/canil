import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';
import { pet } from '../model/pet';

export const home = (req: Request, res: Response) => {
    let list = pet.getAll()

    res.render('pages/page', {
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        nav: createMenuObject('all'),
        list
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = pet.getFromType('dog')
    
    res.render('pages/page', {
        banner:{
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        nav: createMenuObject('dog'),
        list

    })
}

export const cats = (req: Request, res: Response) => {
    let list = pet.getFromType('cat')
   
    res.render('pages/page', {
        banner:{
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        nav: createMenuObject('cat'),
        list
    })
    
}

export const fishes = (req: Request, res: Response) => {
    let list = pet.getFromType('fish')
    res.render('pages/page', {
        banner:{
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        nav: createMenuObject('fish'),
        list
    })
}

