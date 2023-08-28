# desafio-picpay-nodejs

## Resolução do desafio backend da empresa PicPay usando NodeJs com typescript.
O [desafio resolvido](https://github.com/PicPay/picpay-desafio-backend) foi um sistema de transferência bancária, no qual temos 2 tipos de usuários,
os comuns e lojistas, ambos têm carteira com dinheiro e realizam transferências entre eles.

## Arquitetura
O sistema foi desenvolvido usando clean architecture, banco de dados em memória e o framework express para criação de API's 

## Instalação

rode os seguintes comandos no terminal
```
git clone github.com/engnandogabriel/desafio-picpay-nodejs
npm i 
npm run test
```
Versão do node: v18.13

### Payload

#### Rota para criação de usuários
POST /user

expemplo:
```json
{
    "firstName":"Nando Gabriel",
    "lastName":"Machado Bezerra",
    "document":"12345678910",
    "email":"teste@gmail.com",
    "password":"123456",
    "balance":1000,
    "typeUser":"merchant"
    }
```
#### Rota para listar usuários
GET /user

expemplo:
```
json
  {
        "id": "0047ade4-a4fe-405a-9e54-93892805ab9e",
        "firstName": "Nando Gabriel",
        "lastName": "Machado Bezerra",
        "document": "628.031.203-80",
        "email": "nando@gmail.com",
        "password": "123456",
        "balance": 1000,
        "typeUser": "common"
    },
    {
        "id": "e9494622-02dc-4152-9932-4b8895483460",
        "firstName": "Marcos",
        "lastName": "Leonardo",
        "document": "030.559.163-01",
        "email": "marcosg@gmail.com",
        "password": "123456",
        "balance": 500,
        "typeUser": "merchant"
    
}
```


#### Rota para criação de uma transação
POST /transaction

```json
{
    "value" : 260.35,
    "payer" : "0047ade4-a4fe-405a-9e54-93892805ab9e",
    "payee" : "e9494622-02dc-4152-9932-4b8895483460"
}
```

#### Rota para listar as transações
GET /transaction

```json
  {
            "id": "0047ade4-a4fe-405a-9e54-93892805ab9e",
            "value": "260.35",
            "payer": {
                "id": "0047ade4-a4fe-405a-9e54-93892805ab9e",
                "firstName": "Nando Gabriel",
                "lastName": "Machado Bezerra",
                "document": "628.031.203-80",
                "email": "nando@gmail.com",
                "password": "123456",
                "balance": 739.65,
                "typeUser": "common"
            },
            "payee": {
                "id": "e9494622-02dc-4152-9932-4b8895483460",
                "firstName": "Marcos",
                "lastName": "Leonardo",
                "document": "030.559.163-01",
                "email": "marcosg@gmail.com",
                "password": "123456",
                "balance": 760.35,
                "typeUser": "merchant"
            },
            "created_at": "2023-08-28T17:30:35.966Z"
        }
```

