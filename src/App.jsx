import Nav from "./Component/nav";
import Main from "./Component/main";
import data from "./data";

function App() {
  const main=data.map((items)=>{
    return(
      <Main
        key={items.id}
        img={items.img}
        country={items.country}
        title={items.title}
        date={items.date}
        description={items.decription}
      />
    )
  })


  return (
    <>
      <Nav />
      {main}
      
    </>
  );
}

export default App;