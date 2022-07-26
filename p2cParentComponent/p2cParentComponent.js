import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[
        {
            src:"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000",
            header: "First Card",
            description: "First Description"
        },
        {
            src:"https://img.freepik.com/free-vector/cute-koala-sleeping-cartoon-illustration_138676-2778.jpg?w=2000",
            header: "Second Card",
            description: "Second Description"
        },
        {
            src:"https://img.freepik.com/free-vector/cute-koala-with-big-burger-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2165.jpg?w=2000",
            header: "Third Card",
            description: "Third Description"
        },
        {
            src:"https://img.freepik.com/free-vector/cute-koala-hanging-burning-tree-cartoon-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2373.jpg?w=360",
            header: "Fourth Card",
            description: "Fourth Description"
        }
    ]
}