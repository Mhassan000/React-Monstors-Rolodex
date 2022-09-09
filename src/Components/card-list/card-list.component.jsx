import './card-list.styles.css';
const CardList = ({monstors})=>{

    return (
        <div className="card-list">
        {monstors.map((monstor)=>{

            return <div className="card-container" key={monstor.id}>

                <img src={`https://robohash.org/${monstor.id}?set=set2&size=180x180`} alt="monsters" />
                <h2>{monstor.name}</h2>
                <p>{monstor.email}</p>
                        
                                
        </div>
        })}
        </div>
     )   

    
}
export default CardList;