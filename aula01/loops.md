continue
break
label

FOR
for (initialization; condition; afterthought){
    something;
}
*Leitura de matrizes

WHILE
while(condition){
    statement
}


DO WHILE
do{
    something;
} while (condition);

LABELED
label: while(true) {
    statement
    while(true){
        statement
        if(){
            break;
        }
    }
}







------ATIVIDADES--------

1 - Crie um programa que percorra os números de 1 até 20 e exiba no console apenas os números ímpares, o programa deve ser interrompido ao chegar no número 17.
Saída esperada:
1
3
5
7
9
11
13
15

2 - Crie um programa que simule um menu:
1 - Continuar
2 - Mostrar mensagem
0 - Sair
    -Enquanto uma opção válida não for escolhida exiba uma mensagem de erro e mostre novamente o menu.
    -Se o usuário escolher Mostrar mensagem, exiba a mensagem "Olá usuário"
    -Se o usuário escolher Continuar, exiba a mensagem "Continuando..."
    -Se o usuário escolher Sair, exiba a mensagem "Saindo..."
    -Independente da escolha emita uma contagem regressiva de 5 "segundos"

3 - Crie um programa que percorra uma matriz 5x5.
[
 [1,2,3,4,5],
 [6,7,8,9,10],
 [11,12,13,14,15],
 [16,17,18,19,20],
 [21,22,23,24,25]
]
    -Ignore todos os números pares e log apenas os números ímpares
    -Ao chegar no número 19 encerre os dois laços.
saida esperada:
1
3
5
7
9
11
13
15
17