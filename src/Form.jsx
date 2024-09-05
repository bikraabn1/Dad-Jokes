export default function Form(props){

    return (
        <>
            <form onSubmit={props.onSubmit}>
                <h3>Add New Joke</h3>
                <input type="text" id='inputText' value={props.value} onChange={props.onChange}/><br/><br/>
                <button type='submit'>Add Joke</button>
            </form>
        </>
    )
}