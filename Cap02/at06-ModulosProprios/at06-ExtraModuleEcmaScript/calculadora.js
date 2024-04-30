const calculadora = {
    soma:(a, b)=>parseInt(a)+parseInt(b),    
    sub:(a, b)=>parseInt(a)-parseInt(b),    
    mult:(a, b)=>parseInt(a)*parseInt(b),    
    div:(a, b)=>parseInt(b)>0?parseInt(a)/parseInt(b):"Não é possível fazer divisão por 0"
}  

export default calculadora 
