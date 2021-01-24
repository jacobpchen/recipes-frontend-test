import React from "react";
import { useParams } from "react-router";
import Query from '../components/Query'
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment'

import RECIPE_QUERY from "../Queries/recipe";

const Recipe = () => {
    console.log("Inside recipes")
    let { id } = useParams();
    console.log(id)
    return (
        <Query query={RECIPE_QUERY} id={id}>
            {({ data: { recipe } }) => {
                const imageUrl = 'https://placekitten.com/301/301'
                return (
                    <div>
                        <div
                            id="banner"
                            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                        >
                            <h1>{recipe.title}</h1>
                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <h3>Ingredients</h3>
                                <ReactMarkdown source={recipe.ingredients} />
                                <h3>Instructions</h3>
                                <ReactMarkdown source={recipe.instructions} />
                                <p>
                                    Posted on:
                                    <Moment format="MMM Do YYYY">{recipe.created_at}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Recipe;