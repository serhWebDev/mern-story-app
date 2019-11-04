import React, {Component, Fragment} from 'react';
import uuid from 'uuid';
import {
    Spinner,
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';


class ProductList extends Component {

    state = {
        isLoad: true,
        items: [
            {id: uuid(), name:'Stas'},
            {id: uuid(), name:'Ivan'},
            {id: uuid(), name:'Serhii'},
            {id: uuid(), name:'Liza'}
        ]
    };

    componentDidMount() {
        this.setState({
            isLoad: !this.state.isLoad
        })
    }

    render() {
        const {
            isLoad,
            items
        } = this.state;

        return (
            <Fragment>
                <Container>
                    { isLoad && (
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Spinner color="success" />
                        </div>
                    )}
                    { !isLoad && items && (
                        <Fragment>
                            <Button
                                color={'dark'}
                                style={{marginBottom:'2rem'}}
                                onClick={() => {
                                    const name = prompt('Enter Item');
                                    if (name) {
                                        this.setState(state => ({
                                            items: [...state.items, {id: uuid(), name}]
                                        }));
                                    }
                                }}>Add Item</Button>
                            <ListGroup>
                                { items.map(({id, name}) => (
                                    <ListGroupItem key={id}>
                                        <Button
                                            className={'remove-btn'}
                                            color={'danger'}
                                            size={'sm'}
                                            onClick={() => {
                                                this.setState(state => ({
                                                    items: state.items.filter(el => el.id !== id)
                                                }))
                                            }}>&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Fragment>
                    )}
                </Container>
            </Fragment>
        );
    }
}

export default ProductList;