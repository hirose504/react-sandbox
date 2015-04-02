// @file app.js
(function () {
    'use strict';

    var React = require('react');

    var CommentBox = React.createClass({
      getInitialState: function() {
        return {data: [
          {"author": "Pete Hunt", "text": "This is one comment"},
          {"author": "Jordan Walke", "text": "This is *another* comment"}
        ]};
      },
      handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
      },
      render: function() {
        return (
          <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          </div>
        );
      }
    });
    var CommentList = React.createClass({
      render: function() {
        var commentNodes = this.props.data.map(function (comment) {
          return (
            <Comment author={comment.author}>
              {comment.text}
            </Comment>
          );
        });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
      }
    });
    var Comment = React.createClass({
      render: function() {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            {this.props.children}
          </div>
        );
      }
    });
    var CommentForm = React.createClass({
      handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
          return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
      },
      render: function() {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Your name" ref="author" />
            <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />
          </form>
        );
      }
    });
    React.render(
      <CommentBox />,
      document.getElementById('content')
    );
})();
