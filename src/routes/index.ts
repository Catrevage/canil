import { Router } from 'express';
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const route = Router();

route.get('/', PageController.home);
route.get('/dogs', PageController.dogs);
route.get('/cats', PageController.cats);
route.get('/fishes', PageController.fishes);

route.get('/search', SearchController.search);


export default route;