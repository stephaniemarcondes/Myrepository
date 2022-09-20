class Televisao {
    constructor(canalAtual, volumeAtual) {
        this.canalAtual = canalAtual
        this.volumeAtual = volumeAtual
    }


    aumentarVolume(volumeAtual){
        return volumeAtual + 1
    }
    diminuirVolume(volumeAtual){
        return volumeAtual - 1
    }
    aumentarCanal(canalAtual){
        return canalAtual + 1
    }
    diminuirCanal(canalAtual){
        return canalAtual - 1
    }
    trocarCanal(canalNovo){
        this.canalAtual == 0
        this.canalAtual += canalNovo
        return canalNovo
    }
    consultarCanal(){
        return this.canalAtual
    }
    consultarVolume(){
        return this.volumeAtual
    }

}