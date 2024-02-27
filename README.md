# Documentação da API do trabalho final

# API do Herika Darling espaço de beleza

## Autores
Ednei Soares de Carvalho Filho
Wagner Santos Duarte
Ronaldo Oliveira Costa

## Descrição
Este projeto consiste na criação de uma API RESTfull para gerenciar informações detalhadas de profissionais e serviços de um salão de beleza. Seu obejtivo consiste em permitir que a proprietária realize operações CRUD (Criar, ler, atualizar e deletar) para manipular os serviços, valores, procedimentos, nome das profissionais, formação, etc. Esta API foi desenvolvida em foi desenvolvida para uso no projeto do salão com base nos conhecimentos adquiridos ao longo da disciplina de Web.

## Tecnologias usadas
* Bcrypt
* Cors
* Express
* Jsonwebtoken
* Mongodb
* Mongoose
* Multer
* Nodemon

## Introdução
A API permite que a proprietária realize operações de criar um novo profissional, um novo serviço, permite ler os dados dos profissionais e serviços já cadastrados, bem como atualizar serviços, valores, a formação dos profissionais ou até mesmo deletar serviços e funcionários que já não fazem mais parte da equipe do salão.

## URL API:
[API](link)

## **OBS:**
A conexão com o banco de dados pode apresentar lentidão. Caso a conexão falhe, tente novamente em seguida ou aguarde alguns segundos. É normal que na primeira vez os dados demorem para serem carregados!

* GET (Visualizar)
Descrição: Visualizar os profissionais
Resposta:
~~~
[
	{
		"_id": "65dd32300a52e3d08e1d355c",
		"name": "Edilane Aguilar ",
		"__v": 0,
		"description": "Responsável por produzir sobrancelhas  perfeitas e por dar seu nome quando o assunto é limpeza de pele.",
		"social_media": "dih_designersobrancelhas",
		"training": "Designer de sobrancelhas e expert em cuidados faciais"
	},
	{
		"_id": "65dd384cf9e41b40f37bac5c",
		"name": "carlos",
		"image_src": "C:\\Users\\Wagner\\Documents\\Projeto Final WEB 2024\\API WEB FINAL\\uploads\\314400b181ac5317c5a1946ee6cc2260-Captura de Tela (9).png",
		"training": "oiiii",
		"description": "kljhalksjklds",
		"social_media": "face",
		"__v": 0
	},
	{
		"_id": "65dd3aef4860634e7ade9ee0",
		"name": "Livia Batista ",
		"training": "Nail designer/manicure",
		"description": "Produz unhas incríveis e oferece serviços de SPA",
		"social_media": "Livia.batista_unhas",
		"__v": 0
	},
	{
		"_id": "65dd3b774860634e7ade9ee2",
		"name": "Herika Darling ",
		"training": "Idealizadora e designer de sobrancelhas",
		"description": "Referência em micropigmentação e sobrancelhas no Vale do Jequitinhonha",
		"social_media": "herikadarling.pmu",
		"__v": 0
	},
	{
		"_id": "65dd3bb84860634e7ade9ee5",
		"name": "gfhgfdhgf",
		"training": "cabelo",
		"description": "jjjjjjjjj",
		"social_media": "hghgf",
		"__v": 0
	}
]
~~~

* POST(Criar)
Descrição: Cria profissional
Entrada:
~~~
{
	 "name": "Livia Batista ",
   "training": "Nail designer/manicure",
   "description":"Produz unhas incríveis e oferece serviços de SPA",
   "social_media": "Livia.batista_unhas"
}
~~~
Saída:
~~~
{
	"employee": {
		"name": "Livia Batista ",
		"training": "Nail designer/manicure",
		"description": "Produz unhas incríveis e oferece serviços de SPA",
		"social_media": "Livia.batista_unhas",
		"_id": "65dd3aef4860634e7ade9ee0",
		"__v": 0
	},
	"msg": "Funcionário salvo com sucesso"
}
~~~

* PUT (atualizar) 
Descrição: Atualiza profissional
Entrada:
~~~
{
   "social_media": "dih_designersobrancelhas"
}
~~~
Saída:
~~~
{
	"msg": "Funcionário atualizado com sucesso.",
	"employee": {
		"_id": "65dd32300a52e3d08e1d355c",
		"name": "Edilane Aguilar ",
		"__v": 0,
		"description": "Responsável por produzir sobrancelhas  perfeitas e por dar seu nome quando o assunto é limpeza de pele.",
		"social_media": "dih_designersobrancelhas",
		"training": "Designer de sobrancelhas e expert em cuidados faciais"
	}
}
~~~

* DELETE (deletar)
Descrição:
Saída:
~~~
{
	"msg": "Funcionário removido com sucesso!"
}
~~~

## Créditos
- [Documentação Mongoose](https://mongoosejs.com/docs/guide.html)
- [Vídeo Aula Criação de API ](https://youtu.be/zaWFnHagbrM?si=nldSk8jHilk3g1Nb)
- [Documentação Insomnia](https://docs.insomnia.rest/insomnia/send-your-first-request)

## Licenças
* Licença de uso
* Licença de criação
* Licença de alteração
* Licença de propriedade

