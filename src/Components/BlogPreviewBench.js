import React, {useState, useEffect} from "react"
import {Card, CardDeck, Button, Jumbotron, Container, Row} from "react-bootstrap"

import logo from "./../Assets/logo.svg"

import marked from "marked" //for putting markdown in blogpost pages (not used in this file)

function getPreviewCards(bPostPreviews, number=false){
    if(number){
        bPostPreviews = bPostPreviews.slice(-number)
    }
    return(
        bPostPreviews.map(
            function (item, i){
                const {id, title, md_file_path, preview_img_path, description} = item
                console.log(preview_img_path)
                return(
                    <Card style={{ width: '18rem' }} key={i} >
                        <Card.Img variant="top" src={preview_img_path} style={{}} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }
        )
    )
}

const BlogPreviewBench = () => {
    const [hasError, setErrors] = useState(false);
    const [blogPostPreviews, setBlogPostPreviews] = useState({});
  
    async function fetchData() {
      const res = await fetch("http://localhost:8000/blogPostPreviews/");
      res
        .json()
        .then(res => setBlogPostPreviews(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
    });

    //make a list of blog Preview Cards, starting with the most recent post
    // (the data comes in reverse chronological order of creation)
  
    return (
        <Jumbotron style={{height:300}}>
            <Row className="justify-content-md-center">
                <h1>Latest posts!</h1>
            </Row>
            <br/>
            {
                // when loaded, blogPostPreviews will become an array and we can Generate the cards
                Array.isArray(blogPostPreviews)?(
                <CardDeck>
                    {getPreviewCards(blogPostPreviews, 3)}
                </CardDeck>
                    
                ):<div style={{height:300}}></div>
            }
        </Jumbotron>
    );
  };
  export default BlogPreviewBench