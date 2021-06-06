import React, {useState} from "react"

type FormProps = {
    onAddNewBike: () => void
}


const Form = ({onAddNewBike}) => {
    const initialBikeValue = { 
        brand: '',
        type: '',
        model: ''
    }
    const [bike, setBike] = useState(initialBikeValue)
    
    const handleChange = (event: React.ChangeEvent) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setBike({...bike, [fieldName]: fieldValue})
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onAddNewBike(bike)
    }

    return <form onSubmit={handleSubmit}>
        <h2>Add a new bike</h2>
        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" value={bike.brand} onChange={handleChange}/>

        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={bike.type} onChange={handleChange}/>

        <label htmlFor="model">Model</label>
        <input type="text" id="model" value={bike.model}  onChange={handleChange}/>
   
        <button>Add</button>
        <button type="reset">Cancel</button>
   </form>
}

export default Form;