	//parent component that will hold the cards
	import React, { Component } from "react"
	import Category from "./Category"
	import '../css/Board.css'

class Board extends Component {
	constructor() {
		super()
		this.state = {
			category: [],
			questions: {},
			error: {
				errStatus: null,
				errMessage: ''
			}
		}
	}

	componentDidMount() {
		this.getCategories();
		this.getQuestions();
	}

	getCategories = async () => {
		await fetch('http://localhost:5000/categories/')
			.then((response) => {
				return response.json()
			})
			.then((resp) => {
				if(resp){
					this.setState({
						category: resp
					})
				} else {
					throw (resp);
				}
			})
			.catch((error) => {
				this.setState({
					error: {
						errStatus: error.status,
						errMessage: error.statusText
					}
				});
			});
	}

	getQuestions = async () => {
		await fetch('http://localhost:5000/questions/')
			.then((response) => {
				return response.json()
			})
			.then((resp) => {
				if(resp){
					this.setState({
						questions: resp
					})
				} else {
					throw (resp);
				}
			})
			.catch((error) => {
				this.setState({
					error: {
						errStatus: error.status,
						errMessage: error.statusText
					}
				});
			});
	}

	render() {
		const { setModal } = this.props
		const categoryList = this.state.category.map(({category_name, category_id}) => {
			return (
				<Category
					key={category_id}
					catId={category_id}
					name={category_name}
					modalFn={setModal}
				/>
			)
		})

		return (
		<div className="board">
			{ categoryList }
		</div>
		)
	}
}

export default Board
