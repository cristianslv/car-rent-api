import { v4 as uuidV4 } from 'uuid';

// Os models então são espelhos ou representação
// de uma tabela no banco de dados, sendo útil
// para definição de variáveis, retornos e criação
// ou edição desse tipo de tabela.
class Category {
  id?: string;

  name: string;

  description: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
