
import '../App.css';

function Button({name, className,handleClick,id}) {

    return (
       <button id={id} className={className} onClick={handleClick}>
           {name}
       </button>
    );
}

export default Button;