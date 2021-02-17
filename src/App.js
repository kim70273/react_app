import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

const key = "";
const channel="UC9ZLv1m7QDLv991X1-p50AA";
class App extends React.Component{
  state ={
    isLoading:true, //기본적으로 로딩 상태.
    movies:[]
  };//state에 미리 적어두지 않고 나중에 setState를 통해 추가할 수도 있음.

  getMovies = async () =>{
    const {data:{items}} = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel}&key=${key}`);
    console.log(items);
    this.setState({movies:items, isLoading: false});
    //console.log(movies.data.items);
    //console.log(movies.data.items[0].snippet.title);
  }
  componentDidMount(){//여기서 data를 fetch
    //네트워크창에 가보면 axios가 요청하고 있는것이 보인다.
    //axios는 빠르지 않아서 await으로 기다려야 한다.
    this.getMovies();
  }

  //리액트에서는 class 컴포넌트가 있으니 HTML부분에 class를 쓰면 리액트가 혼란스러워한다. 따라서 
  //className을 써야 됨.(자바스크립트 class안에 있을때!)
  render(){
    const {isLoading, movies} = this.state; //es6문법
    return (
      <section className="container">
        {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>):
      (
        <div className="movies"> 
        {
        movies.map((movie) => {
        console.log(movie);
        return <Movie dateAt={movie.snippet.publishedAt} channelTitle={movie.snippet.channelTitle}
                     title={movie.snippet.title} img={movie.snippet.thumbnails.standard.url}
                     key={movie.id} />
      })
        }
        </div>
      )
      }
      </section>
    );
  }
}

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("constructor");
//   }//constructor가 호출된 후에 render가 호출 된다.
  
  
//   //틀래스 컴포넌트 function이 아니기때문에 return이 아니라 render를 가진다.
//   //리액트는 자동적으로 모든 클래스 컴포넌트의 render method를 실행하고자 한다.
//   //클래스 컴포넌트는 state를 가진다.
//   //state는 object이고, 컴포넌트의 데이터를 넣을 공간이 있고, 이 데이터는 변한다.
//   state ={//state에 바꾸고 싶은 데이터를 넣는다.
//     count:0
//   };
// //state는 직접적으로 변경하면 안된다.
// //state 상태가 변경될때 리액트가 render function을 다시 호출하도록 해야한다.
// //setState를 호출하면 리액트는 state를 리프레쉬하고 render function을 호출한다.
// //실행해보면 리액트는 똑똑해서 변화가 있는 부분만 업데이트 하게된다.
//   add =() => {
//     this.setState(current => ({count: current.count+1}));
//     //count: this.state.count+1 이런식으로 state를 쓰는것은 추천하는 방법은 아님
//   };
//   minus=() =>{
//     this.setState({count: this.state.count-1});
//   };


//   componentDidMount(){
//     console.log("componentDidMount");//마운트될때 1번 호출됨
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate");//업데아트 될때 마다 실행
//     //render되고 update실행됨.
//   }
//   componentWillUnmount(){
//     console.log("componentWillUnmount");//페이지 떠날때 등, 컴포넌트가 죽으면 실행
//   }
//   //리액트에서는 버튼에 자동적으로 주어진 onClick이 있다.
//   //this.add()라 적으면 즉시 호출 되고, this.add라 적으면 클릭할 때만 호출됨.
//   render(){
//     console.log("render");
//     return (
//       <div>
//     <h1>The number is {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.minus}>Minus</button>
//     </div>
//     );
//   };

//}

// function Food({fav, picture, rating}){//모두 props로 넘어온다. es6를 사용해서 props안에 있는 fav만 꺼낸다.
//   return (<div> 
//   <h2>I love {fav}</h2>
//   <h4>{rating}/5.0</h4>
//   <img src={picture} alt={fav}/>
//   </div>);
// }

// Food.propTypes ={
//   fav: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating:PropTypes.number
// };//prop 전달 받은것을 체크.

// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
//   },
//   {
//     id:2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//       rating: 4.8
//   },
//   {
//     id:3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//       rating: 4.7
//   },
//   {
//     id:4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//       rating: 4.6
//   },
//   {
//     id:5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//       rating: 4.5
//   }
// ];
// //react의 모든 element는 다르게 보일 필요가 있어서 id를 추가한다.
// //key는 사용하지는 않아도 react 내부에서 사용 됨

// function renderFood(dish){
//   console.log(dish);
//   return <Food key={dish.id} fav={dish.name} picture={dish.image} rating={dish.rating}/>
// }

// function App() {
//   return (
//   <div>
//     <h1>아니 왜 안되너</h1>
//     {foodILike.map(dish => (
//       <Food key={dish.id} fav={dish.name} picture={dish.image} rating={dish.rating} />
//     ))}
//     {foodILike.map(renderFood)}
//   </div>
//   );
//   //자바스크립트로 작성한 것을 HTML로 밀어 넣게 됨.
//   //HTML에 소스 코드를 넣고 빼는 방식(속도가 빠르다.)

//   //컴포넌트에 정보를 보낼 수도 있다.
//   //Food 컴포넌트로 정보르 ㄹ보내고 그것을 사용.

//   //{} 와 같은 소괄호 안에 작성하면 자바스크립트가 된다.

//   //npm i prop-types 설치, prop 전달 받은것을 검사하기 위한 것임.
// }

export default App;
