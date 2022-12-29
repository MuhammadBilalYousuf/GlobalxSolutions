import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
export class PostItems extends Component {
   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }
   static propTypes = {
       post: PropTypes.object.isRequired
   }
   componentDidMount () {
       const {featured_media, author} = this.props.post;
       const getImageUrl = axios.get(`https://www.cashforusedlaptop.com/wp-json/wp/v2/media/${featured_media}`);
       const getAuthor = axios.get(`https://www.cashforusedlaptop.com/wp-json/wp/v2/users/${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {
           console.log(res);
           this.setState({
               imgUrl: res[0].data.guid.rendered,
               author: res[1].data.name,
               isLoaded: true
           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.post;
       const {author, imgUrl, isLoaded} = this.state;
       return (
            <>
                <div className="post-container">
                <h1 className="text-3xl font-bold underline">{title.rendered}</h1>
                    <img className="image" src={this.state.imgUrl} alt={title.rendered} referrerpolicy="no-referrer" />
                    <Fade delay={1e3} cascade damping={1e-1}><p dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p></Fade>
                    <div className="info">      
                    <h4>Written by: {this.state.author}</h4>
                    </div>
                </div>
            </>
       )
   }
}
export default PostItems