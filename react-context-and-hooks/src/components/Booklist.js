import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ colour: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>Learning React</li>
                    <li style={{ background: theme.ui}}>Learning Python</li>
                    <li style={{ background: theme.ui}}>Learning Ruby on Rails</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;