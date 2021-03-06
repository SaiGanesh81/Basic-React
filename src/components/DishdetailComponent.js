import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component{
        constructor(props){
            super(props);
            
        }


        renderComments(comments){
            if(comments != null){
                
                const comm = comments.map((cmt)=>{
                    return(
                        <li>
                            <div>{cmt.comment}</div>
                            <p>--{cmt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(cmt.date)))})</p>
                            <hr width="90%"/><br />
                        </li>
                    );
                });

                return(
                    <div className="table">
                        <h4>Comments</h4>
                        <ul class="list-unstyled">
                            {comm}
                        </ul>
                    </div>
                )

            }
        }

        renderDish(dish){
            return(

                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>   
                        </Card>
  
            );
        }

        render() {

            if(this.props.dish != null){

                return(
                    <div class="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                    </div>
                );

            }
            else{
                return(
                    <div></div>
                )
            }

        }

    }

    export default DishDetail;