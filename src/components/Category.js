import React, { useEffect, useState } from "react"
import Card from "./Card"
import '../css/Category.css'

const Category = ({catId, modalFn, name}) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        getQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getQuestions = async () => {
        try{
            const qResponse = await fetch(`http://localhost:5000/questions/category/${catId}`)
            setQuestions(await qResponse.json());
        } catch(e){
            console.error(e);
        }
    }

    const cards = questions && questions.map((q, index) => {
        return (
            <Card
            key={index}
            modalFn={() => modalFn(q)}
            value={q.points}
            />
        )
    })

    return (
        <div className="category">
            <Card category={name} />
            {cards}
        </div>
    )
}

export default Category
