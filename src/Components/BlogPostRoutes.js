
import React, {useState, useEffect} from "react"
//import {Card, CardDeck, Button, Jumbotron, Container, Row} from "react-bootstrap"
import { Route} from "react-router-dom"

//import logo from "./../Assets/logo.svg"

//custom components and assets
import BlogPostPage from "./BlogPostPage"

const BlogPostRoutes = () => {
    const [hasError, setErrors] = useState(false);
    const [blogPostPreviews, setBlogPostPreviews] = useState({});
  
    async function fetchData() {
        console.log("FETCHING DATA")
        const res = await fetch("https://richardhausman.pythonanywhere.com/blogPostPreviews/");
        console.log(res)
        res
        .json()
        .then(res => setBlogPostPreviews(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
        console.log("GETTING")
        fetchData();
    }, []);

    //make a list of blog Preview Cards, starting with the most recent post
    // (the data comes in reverse chronological order of creation)
  
    return (
        <>
        {
            Array.isArray(blogPostPreviews)?(
                blogPostPreviews.map(
                    function (item, i){
                        const {id, md_text} = item
                        // Right Now, I'll use the id as the unique identifier to dynamically link to the post
                        // In the future I can use whatever as long as it's unique to each post
                        return(
                            <Route exact path={"/posts/"+id} render={
                                ()=> <BlogPostPage md_text={md_text} />
                            } />
                        )
                    }
                )
            ):<div><p>yoikes</p></div>
        }
        </>
    );
  };
  export default BlogPostRoutes