import React, {Component, createRef} from 'react'
import {Menu, Segment, Sticky} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export default class NavigationBar extends Component {
    state = {activeItem: 'Home'}


    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const classes = this.props
        const {activeItem} = this.state

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <Menu attached='top' tabular
                          style={{ backgroundColor: '#7ac7e6'}}>
                        <Link to="/MainBody">
                            <Menu.Item
                                name='Home'
                                active={activeItem === 'Home'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to="/TimeLine">
                            <Menu.Item
                                name='TimeLine'
                                active={activeItem === 'TimeLine'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to="/Gallery">
                            <Menu.Item
                                name='Gallery'
                                active={activeItem === 'Gallery'}
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

                    </Menu>


                </Sticky>
            </div>
        )
    }
}
