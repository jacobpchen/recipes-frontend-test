import React from "react";
import { useParams } from "react-router";
import Recipes from "../components/Recipes";
import Query from "../components/Query";
import CATEGORY_RECIPES_QUERY from '../Queries/category'

const Category = () => {
    let { id } = useParams();

    return (
        <Query query={CATEGORY_RECIPES_QUERY} id={id}>
            {({ data: { category } }) => {
                return (
                    <div>
                        <div className="uk-section">
                            {console.log("Inside category.js")}
                            <div className="uk-container uk-container-large">
                                <h1>{category.name}</h1>
                                {console.log(category.name)}
                                {console.log(category.recipes)}
                                <Recipes recipes={category.recipes} />
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Category;