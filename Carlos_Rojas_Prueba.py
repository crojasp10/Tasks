import re
#1.Capitalización


def capitalizar(palabra):
    ListaString=list(palabra)
    PrimeraLetra=ListaString[0].upper()
    ListaString.pop(0)
    UniendoString="".join(ListaString)
    return PrimeraLetra+UniendoString
    
print(capitalizar(""))


#2 Sala de chat

textobuscar="(h+o+l+a+)"
def validar(palabra):
    if re.search(textobuscar,palabra,re.IGNORECASE) is not None:
        print("VERDADERO")
    else:
        print("FALSO")

validar("Holllaaa")

