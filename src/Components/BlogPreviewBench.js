import React, {useState, useEffect} from "react"
import {Card, CardDeck, Button, Jumbotron, Row} from "react-bootstrap"
//import { BrowserRouter as Router, Route, Switch, Link, useParams} from "react-router-dom"

//import logo from "./../Assets/logo.svg"

//import marked from "marked" //for putting markdown in blogpost pages (not used in this file)
//custom components and assets
import AnimatedDiv from "./AnimatedDiv"
//import BlogPostPage from "./BlogPostPage"

const ncards=3

//shuffle the array then slice the first n to get a random set of blog posts
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function getPreviewCards(bPostPreviews, number=false){
    //console.log(bPostPreviews[2].md_text)
    if(number){
        bPostPreviews = getRandomSubarray(bPostPreviews, ncards)//bPostPreviews.slice(-number)
    }
    return(
        bPostPreviews.map(
            function (item, i){
                const {id, title, preview_img_path, description} = item
                // Right Now, I'll use the id as the unique identifier to dynamically link to the post
                // In the future I can use whatever as long as it's unique to each post
                return(
                    <Card style={{ width: '18rem' }} key={i} >
                        <Card.Img variant="top" src={preview_img_path} style={{}} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary" href={"/posts/"+id}>Read More</Button>
                        </Card.Body>
                    </Card>
                )//return of mapping function
            }//mapping function
        )//map
    )//return
}

const BlogPreviewBench = () => {
    const [hasError, setErrors] = useState(false);
    const [blogPostPreviews, setBlogPostPreviews] = useState({});
  
    async function fetchData() {
        //console.log("GETTING NOW")
        const res = await fetch("https://richardhausman.pythonanywhere.com/blogPostPreviews/");
        //console.log(res)
        res
        .json()
        .then(res => setBlogPostPreviews(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
        //console.log("TRYING TO GET!")
      fetchData();
    }, []);


    //make a list of blog Preview Cards, starting with the most recent post
    // (the data comes in reverse chronological order of creation)
  
    return (
        <Jumbotron style={{height:300}}>
            <Row className="justify-content-md-center">
                <AnimatedDiv animationName="fadeInLeft" senseOnScreen={true} time={1.0} >
                    <h1>Recent Posts!</h1>
                </AnimatedDiv>
            </Row>
            <br/>
            {
                // when loaded, blogPostPreviews will become an array and we can Generate the cards
                Array.isArray(blogPostPreviews)?(
                <CardDeck>
                    {getPreviewCards(blogPostPreviews, ncards)}
                </CardDeck>
                    
                ):<div style={{height:300}}></div>
            }
        </Jumbotron>
    );
  };
  export default BlogPreviewBench