import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsandUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  renderedPosts = () => {
    return this.props.posts.map(post => (
      <div key={post.id} className='item'>
        <i className='large middle aligned icon user' />
        <div className='content'>
          <div className='description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  };
  render() {
    return <div className='relaxed divided list'>{this.renderedPosts()}</div>;
  }
}
const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(mapStateToProps, { fetch: getPostsandUsers })(PostList);
