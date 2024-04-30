const soma=(a, b)=>parseInt(a)+parseInt(b)
exports.soma = soma
const sub=(a, b)=>parseInt(a)-parseInt(b)
exports.sub = sub
const mult=(a, b)=>parseInt(a)*parseInt(b)
exports.mult = mult
const div=(a, b)=>parseInt(b)>0?parseInt(a)/parseInt(b):"Não é possível fazer divisão por 0"
exports.div = div 
