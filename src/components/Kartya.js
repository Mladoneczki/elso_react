// kártya komponens- jsx nyelven
import "./kartya.css";
export default function Kartya(props){
   
return (
    
    <div className="kartya">
        <h3>Név: {props.obj.nev}</h3>
        <p>Kor: {props.obj.kor} év</p>
    </div>
)
}
