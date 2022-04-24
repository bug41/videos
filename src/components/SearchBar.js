import React , {useState} from 'react';


const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');
    
    const onInputChange = (event) => {

        setTerm(event.target.value);

        //this.setState(
        //    { term : event.target.value }
        //);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
        //this.props.onFormSubmit(this.state.term);
    }

    return (
        <div className="search-bar ui segment">
            <form 
                className="ui form"
                onSubmit={onSubmit}
                >
                <div className="field">
                    <label>Video Search</label>                        
                    <input
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(onInputChange)}
                        />
                </div>
            </form>
        </div>
    )

}

export default SearchBar;