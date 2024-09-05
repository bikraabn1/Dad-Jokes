export default function JokesReducer(jokes, action){
    switch(action.type){
      case 'add_joke':
        return [action.newJoke, ...jokes]
      case 'delete_joke':
        return jokes.filter(joke => joke.id !== action.id)
      case 'like_joke':
        return jokes.map(joke =>{
          if(joke.id === action.id){
            return {...joke, likes : joke.likes + 1}
          }else{
            return joke
          }}
        )
        case 'dislike_joke':
        return jokes.map(joke =>{
          if(joke.id === action.id){
            return {...joke, likes : joke.likes - 1}
          }else{
            return joke
          }}
        )
    }
  }