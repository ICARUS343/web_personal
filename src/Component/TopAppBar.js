



import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class TopAppBar extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary style={{ paddingLeft: '25PX ' }}>
                    <Link to="/MainBody">
                        <Menu.Item
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/ArticlePage">
                        <Menu.Item
                            name='Article'
                            active={activeItem === 'Article'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/Contact">
                        <Menu.Item
                            name='Contact'
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Menu.Menu position='right' style={{ paddingRight: '25PX' }}>
                    <Link to="/LoginPage" >

                            <Menu.Item
                                name='LogIn'
                                active={activeItem === 'LogIn'}
                                onClick={this.handleItemClick}

                            />

                    </Link>
                    </Menu.Menu>
                </Menu>


            </div>
        )
    }
}
