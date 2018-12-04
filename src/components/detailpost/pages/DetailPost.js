import React, { Component, Fragment } from 'react'
import { CardBody, Card, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { Link, Redirect} from 'react-router-dom'
import './detailPost.scss'
import { connect } from 'react-redux'
import { getPostById } from '../../../posts/actions'


class DetailPost extends Component {

    constructor(){
        super()
        this.state = {
            postEdited: false,
            postToEdit: {}
        }
        this.handleTitleChanges = this.handleTitleChanges.bind(this)
        this.handleAuthorChanges = this.handleAuthorChanges.bind(this)
        this.handleBodyChanges = this.handleBodyChanges.bind(this)
        this.handleCategoryChanges = this.handleCategoryChanges.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleTitleChanges(event){
        this.setState({title:event.target.value})
    }

    handleAuthorChanges(event){
        this.setState({author:event.target.value})
    }

    handleBodyChanges(event){
        this.setState({body:event.target.value})
    }

    handleCategoryChanges(event){
        this.setState({category:event.target.value})
    }

    componentDidMount(){
        this.props.getPostByIdAction(this.props.match.params.id)
    }

    submitForm(event) {
        event.preventDefault()
        this.props.savePostAction(this.state)
        this.setState({ postEdited: true })
    }
    render(){
        if (this.state.postEdited) {
            return (<Redirect to={'/'} />)
        }else{
            return(
                <Fragment>
                    <div className="header-post">
                        Detalhamento do POST
                    </div>
                    <div className="container-detail-post">
                        <Card>
                            <CardBody>
                                <CardTitle>{this.props.post.author}</CardTitle>
                                <CardSubtitle>{this.props.post.title}</CardSubtitle>
                                <CardText>{this.props.post.body}</CardText>
                            </CardBody>
                        </Card>
                        <Link to={`/posts/edit/${this.props.post.id}`}>
                            <Button>Editar</Button>
                        </Link>
                    </div>
                </Fragment>
            )

        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPostByIdAction: (id) => dispatch(getPostById(id))
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)