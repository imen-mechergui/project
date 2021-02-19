import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle,Button} from 'reactstrap';
import CommentForm from '../comment';
import ListComments from '../ListComment';



const Cardd = ({article}) => {
 

  return (

    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card  body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}>
        <CardImg top width="100%" src={article.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{article.title}</CardTitle>
              <CardText>{article.description}</CardText>
            
                </CardBody>
            <CommentForm article={article} />
  <ListComments comments={article.comments}  articleID={article._id}/>       

      </Card>
   
           
          
</div>
  )

}


export default Cardd;