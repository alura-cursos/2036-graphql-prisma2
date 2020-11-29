CREATE TABLE users(
   id INT AUTO_INCREMENT PRIMARY KEY,
   nome VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
	id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
   conteudo TEXT NOT NULL,
   autorId INT NOT NULL,
   publicado BOOLEAN,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(autorId) REFERENCES users(id)
);

INSERT INTO users (nome, email)
VALUES 
   ("Amanda Costa", "a@a.com"),
   ("Beatriz Martins", "b@b.com"),
   ("Carla Souza", "c@c.com");

INSERT INTO posts (titulo, conteudo, autorId, publicado)
VALUES 
   ("Iniciando em JS", "Conteúdo para iniciantes", 1 , true),
   ("Dicas de React", "Melhores práticas", 2 , true),
   ("Sintaxe CommonJS", "Usando módulos",3 , false);