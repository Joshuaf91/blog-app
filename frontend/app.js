import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery';
import {router} from 'react-router';

const NewPostForm = React.createClass({
	getInitialState(){
		return({newData:{title: "", body: "", author: ""},data:null})
	},
	componentWillMount(){
		console.log('im in componentWillMount')
		this.getOldPost();
	},
	handleChange(change, event){
		console.log("handleingchange for" ,change);
		var newData = Object.assign({}, this.state.newData)
		newData[change] = event.target.value;
		this.setState({newData: newData})
	},
	getOldPost(){
		console.log('im in getOldPost')
		var that = this;
		$.ajax({
			url: '/posts',
			type: 'GET',
			success(data){
				console.log(data)
				that.setState({data:data});
			}
		})

	},
	makeNewPost(event){
		console.log("im in makeNewPost")
		event.preventDefault();
		var body = this.state.newData;
		$.ajax({
			url: '/posts',
			type: 'POST',
			data: body
		})
		setTimeout(this.getOldPost(), 5000);
	},
	render(){
		console.log("STate",this.state)
		return(
			<div>
				<form onSubmit={this.makeNewPost}>
					<input type="text" placeholder="Title" onChange={this.handleChange.bind(this,'title')} value={this.state.newData.title} />
					<br/>
					<input type="text" placeholder="author" onChange={this.handleChange.bind(this,'author')} value={this.state.newData.author} />
					<br/>
					<input type="text" placeholder="body" onChange={this.handleChange.bind(this,'body')} value={this.state.newData.body} />
					<br/>
					<input type="submit" />
				</form>
				{this.state.data ? this.state.data.map((element, index)=>(<div key={index} >{element.title}</div>)) : null}
			</div>
		)
	}
})


render(
  <NewPostForm />,
  document.getElementById('root')
)
