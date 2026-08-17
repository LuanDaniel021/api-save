const t = {
    "title": "Teste POST",
    "content": {
        "header": {
            "method": "POST",
            "path": "/teste/post",
            "tags": ["teste", "database"]
        },
        "body": {
            "desc": "Testa a conexão enviando dados via POST para o banco de dados.",
            "req": {
                "json": {
                    "code": '{\n  "value": 10\n}'
                },
                "schema": {
                    "params": [
                        {
                            "priority": "*",
                            "type": "int",
                            "name": "value"
                        }
                    ]
                }
            },
            "res": {
                "code": '{\n  "status": "success",\n  "received_id": 10\n}'
            }
        }
    }
}
export const api = {

    url : "http://localhost:3000",

    routes : [
        {
            "title": "Caminhões GET",
            "content": {
                "header": {
                    "method": "GET",
                    "path": "/caminhao/cadastro",
                    "tags": ["teste", "database"]
                },
                "body": {
                    "desc": "Testa a conexão executando uma consulta GET no banco de dados.",
                    "res": {
                        "code": "2026-08-15T21:58:00.000Z"
                    }
                }
            }
        },
        {
            "title": "Teste GET",
            "content": {
                "header": {
                    "method": "GET",
                    "path": "/teste/timestamp",
                    "tags": ["teste", "database"]
                },
                "body": {
                    "desc": "Testa a conexão executando uma consulta GET no banco de dados.",
                    "res": {
                        "code": "2026-08-15T21:58:00.000Z"
                    }
                }
            }
        }
    ]

}


