function mostrarLista(lista) {
  if (mostrarLista.length === 0) {
    console.log("La lista esta vacia")
  } else {
    for (const elemento of lista){
    console.log(elemento)
  }
  console.log(`longitud de la lista: ${lista.length}`)
}
}

mostrarLista([])
mostrarLista([1, 2, 3])

class Contador {
    static cant = 0
    
    constructor(responsable) {
        this.responsable = responsable
        this.contador = 0
    }

    contar(){
        this.contador++
        Contador.cant++
    }
    static getCantidadTotal() {
        return Contador.cant
    }
}

const c1 = new Contador('marian')
const c2 = new Contador('anderson')

c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()

c2.contar()
c2.contar()
c2.contar()

console.log(c1)
console.log(c2)
console.log(Contador.getCantidadTotal())